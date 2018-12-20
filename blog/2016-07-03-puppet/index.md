---
title: Django application with puppet- part one
date: '2016-07-03T10:20Z'
slug: '/blog/2016/django-application-puppet-part-one.html'
tags: 
  - django
  - puppet
readNext: '/blog/2016/django-application-puppet-part-two.html'
---

**This post is a quick tutorial how to provision geodjango application
using puppet. While writing this tutorial I have taken the approach that
I start with running code and then refactor this to something better.**

Firstly what is puppet? From their
[website](https://puppet.com/product/how-puppet-works) :

> Puppet provides a standard way of delivering and operating software,
> no matter where it runs. With the Puppet approach, you define what you
> want your apps and infrastructure to look like using a common
> easy-to-read language.

So it's a tool for automatic deployment. Other choices are:
[fabric](http://www.fabfile.org/) or
[ansible](https://www.ansible.com/). I've chosen this tool first because
I use it in my work as a tool for automation as well as I was keen to
look more how this all works.

Puppet is different from other mentioned tools in a way it does
*deployment*: there are two entities: puppet master and a puppet agent.
Master is responsible for keeping the configuration how puppet agent
should look like. When puppet is run it pulls out information from
puppet master and apply to puppet agent. In other words, puppet agent
doesn't have information about its configuration directly- it pulls this
from puppet master. Other tools have a different approach: to push
configuration via SSH.

To play with puppet I decided to choose my project: [geodjango +
leaflet](https://github.com/krzysztofzuraw/geodjango-leaflet). As I said
before to run puppet you have to have two machines: puppet master +
puppet agent. Fortunately, there is a way to develop puppet modules
(module is responsible for configuration of one thing: like module for
PostgreSQL or APT) via [vagrant](https://www.vagrantup.com/).

This tool is so awesome that it allows you to have puppet master and
agent on the same machine. How to do this? After installing Vagrant &
VirtualBox place a file called Vagrantfile inside your project folder:

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.box = "ubuntu/trusty64"

  config.vm.provision :shell do |shell|
    shell.inline = "mkdir -p /etc/puppet/modules;
                    puppet module install puppetlabs-stdlib;
                    puppet module install ripienaar-concat;
                    puppet module install puppetlabs-apt;
                    puppet module install puppetlabs/postgresql;
                    puppet module install puppetlabs/vcsrepo;
                    puppet module install puppetlabs-git;
                    puppet module install arioch-redis;
                    puppet module install ajcrowe-supervisord;
                    puppet module install jfryman-nginx"
  end

  config.vm.provision "puppet" do |puppet|
        puppet.options = ["--templatedir","/vagrant/templates"]
  end

end
```

In this file, I just set up ip address of machine: `192.168.33.10` as
well as what OS will be inside vagrant: `ubuntu/trusty64`. Right after
that, I tell vagrant to execute shell commands for creating a directory
structure for puppet modules as well as install those modules that I
will need later. At the end, I tell vagrant to run puppet with template
directory. If you wanted to run this few times you can add to every
puppet module install flag `--force` at the end of command like
`puppet module install puppetlabs-stdlib --force;`.

Now I can move on to puppet code itself. Puppet modules have to be under
folder called manifests. The name of pp file is right now not important
so I just left it as default value- `default.pp`. So what is in this
file?

At the top I declared bunch of postgresql statements:

```puppet
# required to postgresql resources to work
class { 'postgresql::server':  }
# required by geodjango
class {'postgresql::server::postgis': }
# create db
postgresql::server::db { 'geodjango':
  user     => $title,
  password => $title,
}

postgresql_psql { 'Add password to role':
  db      => 'geodjango',
  command => "ALTER ROLE geodjango WITH PASSWORD 'geodjango';",
  require => Postgresql::Server::Role['geodjango'],
}
# create geodjango role
postgresql::server::role {'geodjango':;}

postgresql::server::database_grant { 'grant ALL privilleges for user geodjango':
  privilege => 'ALL',
  db        => 'geodjango',
  role      => 'geodjango',
}

postgresql_psql { 'Enable postgis extension':
  db      => 'geodjango',
  command => 'CREATE EXTENSION postgis;',
  unless  => "SELECT extname FROM pg_extension WHERE extname ='postgis'",
  require => Postgresql::Server::Db['geodjango'],
}
```

As you can see the puppet syntax is straightforward. To read more about
classes in puppet go
[there](https://docs.puppet.com/puppet/latest/reference/lang_classes.html).
I added one thing that can be not clear:
`require => Postgresql::Server::Role['geodjango']`. It tells puppet that
first `postgresql::server::role` resource needs to be applied. This is
how to create dependencies.

So I've setup database needed for geodjango application, but there are
more dependencies for geodjango- GIS libraries. How to install them via
puppet:

```puppet
package {
  'binutils':  ensure                 => present;
  'libproj-dev': ensure               => present;
  'gdal-bin': ensure                  => present;
  'postgresql-server-dev-9.3': ensure => present;
  'build-essential': ensure           => latest;
  'python3': ensure                   => latest;
  'python3.4-dev': ensure             => latest;
  'python3-setuptools': ensure        => latest;
  'python3-pip': ensure               => latest;
  'python3.4-venv': ensure            => latest;
  'python-pip': ensure                => present;
}
```

I've used redis for my application so I need it too. I've default config
for redis and I don't need to specify additional arguments for this
resource:

```puppet
class { 'redis':;}
```

I don't like when application is run by root user that's why I created a
special dedicated one only for my application. I also like to keep my
code on machines under `/opt/name_of_project` path so I created this
too:

```puppet
user { 'geodjango':
  ensure     => present,
  managehome => true,
}

file { ['/opt/geodjango/','/opt/geodjango/geodjango']:
  ensure => 'directory',
  owner  => 'geodjango'
}
```

For running my application I need it source code which is under git. To
download it to vagrant machine I use:

```puppet
include git

vcsrepo { '/opt/geodjango/geodjango':
  ensure   => latest,
  provider => git,
  source   => 'https://github.com/krzysztofzuraw/geodjango-leaflet.git',
  user     => 'geodjango',
  force     => true,
}
```

In `vcsrepo`, I added parameter `force` to make sure that repo is
updated with new commits if it already exists on my deployed machine.

That it for this blog post! Comments welcome! I've got running vagrant
machine with application source code and basic bootstrap done. In the
next post I will show how to combine them.
