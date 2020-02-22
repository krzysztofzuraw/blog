---
title: Provisioning django application using ansible
date: '2017-01-29T10:00Z'
slug: '/blog/2017/provisioning-django-application-ansible.html'
tags: 
    - django
    - ansible
---

**As I recently have opportunity of having a workshop about ansible in
my work and I decided to write a blog post on how to provision django
application using this tool.**

What is ansible and how's is different from puppet
==================================================

Ansible is a tool that helps automate boring tasks. These tasks are
connected with setting up Linux machines, installing proper software on
them and moving code from repositories to machines. Ansible has a
different way of accomplishing these tasks than puppet. It is using push
*system* - in short ansible connects to your machine via ssh and push
changes. No need for masters and agents etc. Puppet, on the other hand,
is using pull *system* which allows every machine to pull changes from
master. Ansible is using the same principles as puppet so you declare
how should host look like after running ansible.

Provisioning django application using ansible
=============================================

I will be provisioning
[geodjango-leaflet](https://github.com/krzysztofzuraw/geodjango-leaflet).
I assume that you know basic concepts of ansible like play, playbook or
role. This is how a structure of my ansible repo looks like:

```bash
.
├── ansible.cfg
├── inventory
│   └── vagrant
│       └── hosts.ini
├── playbooks
│   ├── roles -> ../roles/
│   └── vagrant.yaml
├── roles
│   ├── db
│   │   └── tasks
│   │       └── main.yml
│   ├── geodjango
│   │   ├── handlers
│   │   │   └── main.yml
│   │   ├── tasks
│   │   │   └── main.yml
│   │   └── templates
│   │       ├── nginx.conf.j2
│   │       └── supervisord.conf.j2
│   ├── redis
│   │   └── tasks
│   │       └── main.yml
│   └── roles -> roles
└── Vagrantfile
```

Let's start from the bottom - Vagrantfile. I will be using vagrant as a
playground. Configuration file a.k.a vagrantfile looks as follows:

```ruby
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
config.vm.box = "trusty64"
config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"
config.ssh.insert_key = false

config.vm.hostname = "vagrant-ansible"
config.vm.network "private_network", ip: "192.168.33.10"

config.vm.provision "ansible" do |ansible|
 ansible.playbook = "playbooks/vagrant.yaml"
 ansible.inventory_path = "inventory/vagrant/hosts.ini"
 ansible.sudo = true
 ansible.verbose = "v"
 ansible.limit = "all"
end

end
```

I setup basic `private_network` with ip of a vagrant box. In
`config.vm.provision` I specified playbook which should be run in
vagrant and inventory where the configuration of my hosts lay. This
inventory presents itself below:

```ini
vagrant-ansible ansible_ssh_host=192.168.33.10 ansible_ssh_port=22
```

My ansible playbook don't have tasks inside it but I delegate it to
roles:

```yaml
---

- hosts: vagrant-ansible
  become: yes

  roles:
    - db
    - geodjango
    - redis
```

Let's start with the first role: `db`. In folder with this role, I have
tasks folder with `main.yml`:

```yaml
---


- name: ensure apt cache is up to date
  apt: update_cache=yes

- name: ensure packages are installed
  apt:
    name: "{{item}}"
  with_items:
    - postgresql
    - libpq-dev
    - python-psycopg2
    - postgresql-9.3-postgis-2.1
    - python3-dev
    - python-dev

- name: ensure database is created
  become_user: postgres
  postgresql_db:
    name: geodjango

- name: ensure user has access to database
  become_user: postgres
  postgresql_user:
    db: geodjango
    name: geodjango
    password: geodjango
    priv: ALL

- name: enable postgis for database
  become_user: postgres
  postgresql_ext:
    name: postgis
    db: geodjango
```

In this task, I run `apt-get update` at the top then I install a couple
of packages so I can setup Postgres. Right below that I create db, grant
user access to that db and create PostGIS extension. As this role
completes ansible will execute `geodjango` role:

```yaml
---

- name: ensure packages are installed
  apt:
    name: "{{item}}"
  with_items:
    - binutils
    - libproj-dev
    - gdal-bin
    - git
    - python-virtualenv
    - build-essential
    - postgresql-server-dev-all
    - supervisor
    - nginx

- name: ensure git repo is present
  git:
    repo: https://github.com/krzysztofzuraw/geodjango-leaflet.git
    dest: /opt/geodjango

- name: create virtualenv
  command: virtualenv /opt/venv -p python3.4 creates="/opt/venv"

- name: install requirements
  pip:
    requirements: /opt/geodjango/requirements.txt
    executable: /opt/venv/bin/pip

- name: migrate django application
  django_manage:
    command: migrate
    virtualenv: /opt/venv
    app_path: /opt/geodjango

- name: load django initial data
  django_manage:
    command: load_inital_voivodeships
    virtualenv: /opt/venv
    app_path: /opt/geodjango

- name: collect static files
  django_manage:
    command: collectstatic
    virtualenv: /opt/venv
    app_path: /opt/geodjango

- name: ensure config dir for supervisor extists
  file:
    slug: /etc/supervisor/conf.d
    state: directory

- name: ensure supervisor config is present
  template:
    src: templates/supervisord.conf.j2
    dest: /etc/supervisor/conf.d/geodjango.conf
  notify: reread supervisor

- name: remove default nginx configuration
  file:
    name: /etc/nginx/sites-enabled/default
    state: absent

- name: ensure nginx config is present
  template:
    src: templates/nginx.conf.j2
    dest: /etc/nginx/sites-enabled/geodjango.conf
  notify: restart nginx
```

This code above is self-explanatory but I will write closely about task
called `create virtualenv`. Normally you can write this and next one
task in one like:

```yaml
pip:
  requirements: /opt/geodjango/requirements.txt
  virtualenv: /opt/venv
```

And if this virtualenv is not present it will be created. But there is a
bug in ansible that is causing these requirements to be installed in
system wide python, not virtualenv one. Reference is
[here](https://github.com/ansible/ansible-modules-core/issues/5458). I
use fix provided by one of the guys in this issue discussion - I break
this task into two separate: one for creating virtualenv and second one
for installing requirements.

What is different in this task is that I'm also using templates for
supervisor and Nginx. They have `j2` ending as ansible is using jinja2
template system. During the ansible run, they will be copied to given
`dest`. At the end of tasks with templates I have `notify` keyword which
tells ansible to look for handlers folder with tasks for restarting
services. In my case they look as follows:

```yaml
---

- name: reread supervisor
  supervisorctl:
    name: geodjango_leaflet
    state: present

- name: restart nginx
  service:
    name: nginx
    state: restarted
```

The last role is redis. This code installs redis-server and starts it:

```yaml
---

- name: ensure redis packages are installed
  apt:
    name: "{{item}}"
  with_items:
    - redis-server

- name: ensure redis is started
  become: true
  service:
    name: redis-server
    state: started
    enabled: yes
```

My thoughts and feelings about ansible
======================================

I have to say I'm really impressed on how easy is to write ansible
tasks. With puppet, I have this problem that I need to look for modules
in puppet forge or write my own. Here everything is included. You want
to use django commands -use `django_manage`, need to reread supervisor
config use `present` in `supervisorctl` task. Really easy and fun to
work with. I can quickly get a job done and move to another stuff.

Yet, I don't know how ansible will behave when it comes to provisioning
a large amount of machines. Here I have only one host and it's going
smoothly, but for sure when I will have a need for provisioning my
private machines I will choose ansible.

That's all for this week blog post! Feel free to comment - I really
appreciate that.

Repo with this code is available on
[github](https://github.com/krzysztofzuraw/vagrant-ansible).
