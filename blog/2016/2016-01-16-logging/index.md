---
title: Http and websockets logging handlers
date: '2016-01-16T10:20Z'
slug: 'blog/2016/http-websockets-logging-handlers.html'
tags: 
    - python
    - logging
---

**Hello, this posts will be about 3 specific logging handlers:
HTTPHandler, SocketHandler and DatagramHandler.**

HTTPHandler
===========

Let's start with HTTPHandler: reading python docs about
[HTTPHandler](https://docs.python.org/3.4/library/logging.handlers.html#httphandler)
we can see that:

> The HTTPHandler class, located in the logging.handlers module,
> supports sending logging messages to a Web server, using either GET or
> POST semantics.

So this will be useful to have such handler in case of many different
modules in different machines that sends logs to one central server.

As an example, I will build simple flask application which prints out
the logging message from the client.

To install Flask:

```bash
$ pip install Flask
```

Then make server.py:

```python
from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=['POST', 'GET'])
def hello():
for key, value in request.args.items():
    print(key,value)
return 'response' # it has to return something


if __name__ == "__main__":
app.run(debug=True)
```

To send some data, create script called send\_log.py:

```python
import logging
import logging.handlers

logger = logging.getLogger(__name__)

server = '127.0.0.1:5000'
path = '/'
method = 'GET'

sh = logging.handlers.HTTPHandler(server, path, method=method)

logger.addHandler(sh)
logger.setLevel(logging.DEBUG)

logger.debug("Test message.")
```

SocketHandler
=============

Now let's move to the
[SocketHandler](https://docs.python.org/3.4/library/logging.handlers.html#sockethandler):
this is what python docs say about it

> The SocketHandler class, located in the logging.handlers module, sends
> logging output to a network socket. The base class uses a TCP socket.

Based on this we can now guess that web socket will receive logging
message.Then we can process it further. It will be useful when there is
a lot of logs to be sent to the server. So opening HTTP connection every
time is not a good solution.

So first we need some TCP server:

```python
class LogRecordSocketReceiver(socketserver.ThreadingTCPServer):
    allow_reuse_address = True

    def __init__(self, host='localhost',
                 port=logging.handlers.DEFAULT_TCP_LOGGING_PORT,
                 handler=LogRecordStreamHandler):
        socketserver.ThreadingTCPServer.__init__(self, (host, port), handler)
        self.abort = 0
        self.timeout = 1
        self.logname = None

    def serve_until_stopped(self):
        import select
        abort = 0
        while not abort:
            rd, wr, ex = select.select([self.socket.fileno()],
                                       [], [],
                                       self.timeout)
            if rd:
                self.handle_request()
            abort = self.abort

def main():
    tcpserver = LogRecordSocketReceiver()
    print('About to start TCP server...')
    tcpserver.serve_until_stopped()

if __name__ == '__main__':
    main()
```

What is going on here? In the `main` function we instantiate threading
TCP server and we serve it until we don't hit Ctrl+C. In the
`serve_until_stopped` method of `LogRecordSocketReceiver` we are waiting
for the key combination to the stop server and if this not happening the
we retrieve information about the socket by `self.socket.fileno()` which
is a descriptor of a socket. Then we pass it to another function call:
this time `select()`. Select is system call for examining the status of
file descriptors of open input/output channels which in this case is
information from the socket. If there is anything ready to be read we
handle the request and process it.

To process it we need handler:

```python
class LogRecordStreamHandler(socketserver.StreamRequestHandler):

    def handle(self):
        while True:
            chunk = self.connection.recv(4)
            if len(chunk) < 4:
                break
            slen = struct.unpack('>L', chunk)[0]
            chunk = self.connection.recv(slen)
            while len(chunk) < slen:
                chunk = chunk + self.connection.recv(slen - len(chunk))
            obj = pickle.loads(chunk)
            print(obj)
```

In method `handle` we read chunks of information from sent logging
message. The chunk is byte type so then we need to translate it to
python object by calling `pickle.loads()`.

DatagramHandler
===============

Lastly, there is
[DatagramHandler](https://docs.python.org/3.4/library/logging.handlers.html#datagramhandler)
which supports sending logging messages over UDP.

The actual code is very similar to SocketHandler:

```python
class MyUDPHandler(socketserver.BaseRequestHandler):
    def __init__(self, request, client_address, server):
        socketserver.BaseRequestHandler.__init__(self, request,
                                                 client_address,
                                                 server)

    def handle(self):
        msg, socket = self.request
        print("{} wrote:".format(self.client_address[0]))
        print(pickle.loads(msg[4:]))
        socket.sendto(msg.upper(), self.client_address)
```

Thanks to [RooTer](http://stackoverflow.com/users/5807830/rooter) answer
on
[stackoverflow](http://stackoverflow.com/questions/34761688/unpickling-data-in-udp-server-send-from-logger-results-in-eoferror)
I got this working by omitting first 4 bytes of data because they
contain length of dumped object.

Updates
-------

-   23.01.16 Thanks to RooTer answer I added UDP log handler
