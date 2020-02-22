---
title: Django application with puppet- part two
date: '2016-07-09T08:00Z'
slug: '/blog/2016/django-application-puppet-part-two.html'
tags: 
  - django
  - puppet
readPrev: '/blog/2016/django-application-puppet-part-one.html'
---

**I end first post at the moment of pulling code from git. This text is
how to setup additional stuff for geodjango application.**

It's a good practice in python word to have isolated environments per
application. In python 3 there is a tool for that in standard library
called [venv](https://docs.python.org/3/library/venv.html). How to
create such virutal enviroment? By invoking similar command in shell:

```shell
python3 -m venv /opt/geodjango/env
```

As it is the command that is run in the shell, puppet has the special
resource to handling these cases: `exec`. How to use it? It's simple:

```puppet
exec { 'create venv':
  command => 'python3 -m venv /opt/geodjango/env',
  path    => '/usr/local/bin:/usr/bin:/bin',
  require => Vcsrepo['/opt/geodjango/geodjango'],
}
```

I'm telling puppet to execute `command` that is in `path`. I decided
that this command will be run only when there are changes in the repo.
That's why `require` argument.

Right now I created virtual environment. It's time to install python
packages that are needed for proper operation of the whole application.
I've used so-called
[requirements.txt](https://pip.readthedocs.io/en/1.1/requirements.html).
To install packages from that file via puppet I need:

```puppet
exec { 'install requirements':
  command => '/opt/geodjango/env/bin/pip install --requirement /opt/geodjango/geodjango/requirements.txt',
  path    => '/usr/local/bin:/usr/bin:/bin',
  require => Exec['create venv']
}
```

I specify here full paths for `pip` as well as for `requirements` file.

As everything is installed I need a tool for managing my geodjango
application. I can do this by invoking django command `runserver` as a
deamon. But there is a tool designed especially for that-
[supervisor](http://supervisord.org/). How does it works? You specify in
ini file which commands needs to be run by supervisor. In addition to
that, you can see if your command run was successful or not. To use
supervisor you need:

```puppet
include ::supervisord

supervisord::program { 'django':
  command     => '/opt/geodjango/env/bin/gunicorn geodjango_leaflet.wsgi -b 127.0.0.1:9000',
  user        => 'geodjango',
  directory   => '/opt/geodjango/geodjango',
  subscribe   => Vcsrepo['/opt/geodjango/geodjango'],
}
```

At the top, I included supervisord resource. `D` at the end stands for
the daemon. Right below that I setup program `django` which is a simple
gunicorn command run by user geodjango inside specified directory.

I have my app running via gunicorn managed by supervisor but there is
one more thing: web server. In my apps I use nginx so I'm gonna setup
that:

```puppet
class {'nginx':
  confd_purge  => true,
  vhost_purge  => true,
}

$nginx_settings = {
  'upstream_name'    => 'geodjango',
  'upstream_address' => '127.0.0.1:9000',
}

file { ["/etc/nginx/sites-available/geodjango.conf","/etc/nginx/sites-enabled/geodjango.conf" ] :
  ensure   => file,
  content  => template('nginx.erb'),
  notify   => Service['nginx']
}
```

Starting from the top: I configured class nginx to do not setup conf.d
files as well as vhost ones. Right after that, I defined puppet variable
`$nginx_settings` which is a hash. I will be using this variable in
resource `file` where I tell puppet to setup file in `sites-available`
as well as in `sites-enabled`. Content of this file is present in
template `nginx.erb`:

```ruby
upstream <%= @nginx_settings['upstream_name'] %> {
  server <%= @nginx_settings['upstream_address'] %>;
}

server {

    location /static {
        alias /opt/geodjango/static;
    }

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        proxy_pass http://<%= @nginx_settings['upstream_name'] %>;
    }
}
```

As you can see I use `nginx_settings` inside my template. It's because
puppet takes variables for the local scope of given module- in this case
`default.pp`. It's good to know that they are two types of templates
that puppet can use- one erb style (ruby) that I currently used in this
example and puppet style
([epp](https://docs.puppet.com/puppet/latest/reference/lang_template_epp.html)).

There are three more things to do: first to run database migrations,
load initial data to the database and the third one to collect static
files. I want to do them manually but here is puppet code if you are
interested:

```puppet
exec { 'run django migrations':
  command     => '/opt/geodjango/env/bin/python /opt/geodjango/geodjango/manage.py migrate --no-input',
  path        => '/usr/local/bin:/usr/bin:/bin',
  require     => Exec['install requirements'],
  subscribe   => Postgresql_psql['Add password to role'],
  refreshonly => true,
}

exec { 'load initial data to db':
  command     => '/opt/geodjango/env/bin/python /opt/geodjango/geodjango/manage.py loaddata',
  path        => '/usr/local/bin:/usr/bin:/bin',
  require     => Exec['install requirements'],
  subscribe   => Postgresql_psql['Add password to role'],
  refreshonly => true,
}

exec { 'collect static files':
  command     => '/opt/geodjango/env/bin/python /opt/geodjango/geodjango/manage.py collectstatic --noinput',
  path        => '/usr/local/bin:/usr/bin:/bin',
  require     => Exec['install requirements'],
  subscribe   => Vcsrepo['/opt/geodjango/geodjango'],
  refreshonly => true,
}
```

All these 3 commands are django one (loaddata is made by myself). To use
them with puppet you need to specify them under `exec` resource.

That's all for this time. To sum these two articles up: I really enjoyed
playing with puppet. Especially this clear syntax that puppet provides.
I also like that you can even write a tests for puppet code! Having two
machines (puppet master & agent) for provisioning is good because you
can have real time update of your agent machine but requiers resources.

What is more I currently use vagrant with default config which is not
good- not enough RAM on client machine forces puppet run to stop. I
could set it up for higher value but my computer isn't' good enough. To
bypass this I have plan to use docker with puppet master and agent.
Lastly installing every time puppet modules in Vagrantfile isn't good
idea- that's another thing to change and maybe use something like
[puppet-librarian](http://librarian-puppet.com/)?

Source code for this is avaiable
[here](https://github.com/krzysztofzuraw/vagrant-puppet).
