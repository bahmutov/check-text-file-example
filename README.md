# check-text-file-example

Read the blog post [Test Plain Or Markdown File Using Cypress](https://glebbahmutov.com/blog/text-plain-or-markdown-file/)

## Install

```shell
$ npm install
```

## Start the server

```shell
$ npm start
```

Tip: you can verify the server is working by requesting a plain text file

```shell
$ curl -v http://localhost:8100/text-file
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 8100 (#0)
> GET /text-file HTTP/1.1
> Host: localhost:8100
> User-Agent: curl/7.64.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/plain
< Content-Length: 34
< Date: Wed, 08 Sep 2021 08:13:09 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
This is a file

A plain text file
* Connection #0 to host localhost left intact
* Closing connection 0
```

## Start Cypress

```shell
$ npx cypress open
```

Find the tests in the [cypress/integration/spec.js](./cypress/integration/spec.js) file.
