const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '../client'));

app.use('/proxy', proxy('www.google.com', {
  filter: function(req, res) {
    return req.method == 'GET';
 }
}));

app.use('/hostInfo', proxy('http://localhost:3001', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('/');
    let queryString = parts[1];
    let updatedPath = parts[0];
    console.log('🤡',parts, req.url, '🏵', queryString, updatedPath );
    return (!queryString.length) ? '/' : `/hostInfo/${queryString}`;
  }
}));

app.use('/homeDesc', proxy('http://localhost:3002', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('/');
    let queryString = parts[1];
    let updatedPath = parts[0];
    return (!queryString.length) ? '/' : `/homeDesc/${queryString}`;
  }
}));

app.listen(PORT, () => {
  console.log(`Proxy Server listening on port http://localhost:${PORT}`);
});

