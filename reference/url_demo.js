const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// hostname (does not get port)

console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query 
console.log(myUrl.search);

// Params object
console.log();