const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(__dirname + '/../client'));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/index.html'));
});

app.use('/proxy', proxy('www.google.com', {
  filter: function(req, res) {
    return req.method == 'GET';
 }
}));

app.use('/rooms', proxy('http://localhost:3002', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let pathname = req.url.split('/')[1];
    let queryString = parts[1];
    console.log('🏓 home', parts, queryString, '🪀', pathname)
    return !pathname ? '/' : `/rooms/${pathname}`;
  }
}));

app.use('/hostInfo', proxy('http://localhost:3006', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    let pathname = req.url.split('/')[1];
    console.log('🏓 host', parts, queryString, '🪀', pathname)
    return !pathname ? '/' : `/hostInfo/${pathname}`;
  }
}));

app.use('/images', proxy('http://localhost:3001', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    let pathname = req.url.split('/')[1];
    console.log('🏓 images', parts, queryString, '🪀', pathname)
    return !pathname ? '/' : `/${pathname}`;
  }
}));

app.use('/pricing', proxy('http://localhost:3003', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    let pathname = req.url.split('/')[1];
    console.log('🏓 pricing', parts, queryString, '🪀', pathname)
    return !pathname ? '/' : `/pricing${pathname}`;
  }
}));

app.use('/reviews', proxy('http://localhost:3004', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    return !queryString ? '/' : `/hostInfo/${queryString}`;
  }
}));

app.use('/location', proxy('http://localhost:3005', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    return !queryString ? '/' : `/hostInfo/${queryString}`;
  }
}));


app.listen(PORT, () => {
  console.log(`Proxy Server listening on port http://localhost:${PORT}`);
});

