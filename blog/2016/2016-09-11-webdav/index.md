---
title: Python & WebDAV- part one
date: '2016-09-11T10:00Z'
slug: '/blog/2016/python-webdav-part-one.html'
tags: 
    - webdav
    - python
readNext: '/blog/2016/python-webdav-part-two.html'
---

**I must confess I was ignorant. Recently I saw an application done by
my colleague at work and it was using python WebDAV client. I was
intrigued because for me WebDAV was connected with calendars (CalDAV)
and contacts (CardDAV). And there I have WebDAV which is filesystem.**

**I decided to write this blog post about it for better understanding
what it is. This is the first part of blog series about this extension
to HTTP.**

What is WebDAV and what is it useful for?
=========================================

From [wikipedia](https://en.wikipedia.org/wiki/WebDAV):

> Web Distributed Authoring and Versioning (WebDAV) is an extension of
> the Hypertext Transfer Protocol (HTTP) that allows clients to perform
> remote Web content authoring operations. (...)
>
> The WebDAV protocol provides a framework for users to create, change
> and move documents on a server, typically a web server or web share.

In other words users that work with the server that implements WebDAV
can share, move and edit files through a web server. There is also a way
to lock file or get a specific revision of it. WebDAV is supported by
many client applications like Windows Explorer or Nautilus. It is
similar to another protocol- FTP. FTP is faster, but it doesn't run on
top of HTTP. WebDAV also support SSL and authentication.

CardDAV and CalDAV are extensions to WebDAV that enable client/server
address book and to accessing the calendar on the remote server.

Setting up your own WebDAV server
=================================

I will set up basic WebDAV server using
[owncloud](https://owncloud.com/). Owncloud is a self-hosted solution
for the cloud. In addition to this owncloud provides WebDAV server that
I will use in the next blog post.

On owncloud download
[page](https://owncloud.org/install/#instructions-server), there is a
lot of options to choose from but I choose appliances tab with OVA (open
virtual application)
[image](http://download.owncloud.org/community/production/vm/Ubuntu_14.04-owncloud-9.1.0-1.1-201609011525.ova.zip)
for [VirtualBox](https://www.virtualbox.org/). Installation is really
simple just follow this
[manual](https://doc.owncloud.org/server/8.0/admin_manual/installation/appliance_installation.html).

After a while, you will have working owncloud served from VirtualBox.
Now it's time to play with WebDAV server. To check if this is working I
will use CURL:

```shell
$ curl --user user:password 'http://localhost:8888/owncloud/remote.php/webdav/'
This is the WebDAV interface. It can only be accessed by WebDAV clients such as the ownCloud desktop sync client.⏎
```

To get properties about root folder:

```xml
$ curl --user user:password --include --request PROPFIND --header "Depth: 1" 'http://localhost:8888/owncloud/remote.php/webdav'
<?xml version="1.0"?>
<d:multistatus xmlns:d="DAV:" xmlns:s="http://sabredav.org/ns" xmlns:oc="http://owncloud.org/ns">
 <d:response>
  <d:href>/owncloud/remote.php/webdav/</d:href>
  <d:propstat>
   <d:prop>
    <d:getlastmodified>Thu, 08 Sep 2016 04:22:23 GMT</d:getlastmodified>
    <d:resourcetype>
     <d:collection/>
    </d:resourcetype>
    <d:quota-used-bytes>4756701</d:quota-used-bytes>
    <d:quota-available-bytes>-3</d:quota-available-bytes>
    <d:getetag>&quot;57d0e77f723e4&quot;</d:getetag>
   </d:prop>
   <d:status>HTTP/1.1 200 OK</d:status>
  </d:propstat>
 </d:response>
 <d:response>
  <d:href>/owncloud/remote.php/webdav/Documents/</d:href>
  <d:propstat>
   <d:prop>
    <d:getlastmodified>Thu, 08 Sep 2016 04:22:23 GMT</d:getlastmodified>
    <d:resourcetype>
     <d:collection/>
    </d:resourcetype>
    <d:quota-used-bytes>36227</d:quota-used-bytes>
    <d:quota-available-bytes>-3</d:quota-available-bytes>
    <d:getetag>&quot;57d0e77f4b534&quot;</d:getetag>
   </d:prop>
   <d:status>HTTP/1.1 200 OK</d:status>
  </d:propstat>
 </d:response>
 <d:response>
  <d:href>/owncloud/remote.php/webdav/Photos/</d:href>
  <d:propstat>
   <d:prop>
    <d:getlastmodified>Thu, 08 Sep 2016 04:22:23 GMT</d:getlastmodified>
    <d:resourcetype>
     <d:collection/>
    </d:resourcetype>
    <d:quota-used-bytes>678556</d:quota-used-bytes>
    <d:quota-available-bytes>-3</d:quota-available-bytes>
    <d:getetag>&quot;57d0e77f69116&quot;</d:getetag>
   </d:prop>
   <d:status>HTTP/1.1 200 OK</d:status>
  </d:propstat>
 </d:response>
 <d:response>
  <d:href>/owncloud/remote.php/webdav/ownCloud%20Manual.pdf</d:href>
  <d:propstat>
   <d:prop>
    <d:getlastmodified>Thu, 08 Sep 2016 04:22:23 GMT</d:getlastmodified>
    <d:getcontentlength>4041918</d:getcontentlength>
    <d:resourcetype/>
    <d:getetag>&quot;1951114eecb977f35fb154c06dcfc4e0&quot;</d:getetag>
    <d:getcontenttype>application/pdf</d:getcontenttype>
   </d:prop>
   <d:status>HTTP/1.1 200 OK</d:status>
  </d:propstat>
 </d:response>
</d:multistatus>
```

That's all for this post! Next week as I got my server running I will be
looking into python library for WebDAV. Feel free to comment- I really
appreciate your feedback.

Special thanks to Kasia for being editor for this post. Thank you.
