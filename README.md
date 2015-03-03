# node-ip-info

Retrieves information about a specific IP. 

Let's give it a shot with 8.8.8.8:

```
curl -D - http://127.0.0.1:8080/api/8.8.8.8 
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 312
ETag: W/"138-614da163"
Date: Tue, 03 Mar 2015 13:00:03 GMT
Connection: keep-alive

{"countryCode":"US","countryName":"United States","region":"CA","city":"Mountain View","postalCode":"94035","latitude":37.385999999999996,"longitude":-122.0838,"dmaCode":807,"areaCode":650,"metroCode":807,"continentCode":"NA","regionName":"California","ip":"8.8.8.8","domains":["google-public-dns-a.google.com"]}
```

# Install 

Clone the repo,

```git clone https://github.com/PaulSec/node-ip-info.git```

Install the dependencies, 

```npm install```

And start the server:

```node server.js```

Enjoy by targeting the entry point here:

```
http://127.0.0.1:8080/api/<ip>
```


# Contributing

Feel free to submit PR and contribute to the project. I am actually thinking about a nice front-end if you fancy helping with that.