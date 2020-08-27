const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(__dirname + '/../client'));

app.use('/proxy', proxy('www.google.com', {
  filter: function(req, res) {
    return req.method == 'GET';
 }
}));

app.use('/homeDesc', proxy('http://localhost:3002', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let pathname = req.url.split('/');
    let queryString = parts[1];
    console.log('🏓', parts, queryString, '🪀', pathname)
    return !queryString ? '/' : `/homeDesc/${queryString}`;
  }
}));

app.use('/hostInfo', proxy('http://localhost:3006', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    return !queryString ? '/' : `/hostInfo${queryString}`;
  }
}));

app.use('/images', proxy('http://localhost:3001', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    return !queryString ? '/' : `/hostInfo/${queryString}`;
  }
}));

app.use('/checkin', proxy('http://localhost:3003', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    return !queryString ? '/' : `/hostInfo/${queryString}`;
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

app.use('/images', proxy('http://localhost:3001', {
  proxyReqPathResolver: function (req) {
    let parts = req.url.split('?');
    let queryString = parts[1];
    return !queryString ? '/' : `/hostInfo/${queryString}`;
  }
}));


app.listen(PORT, () => {
  console.log(`Proxy Server listening on port http://localhost:${PORT}`);
});

