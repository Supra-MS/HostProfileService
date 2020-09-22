const express = require('express');
const responseTime = require('response-time');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const expressStaticGzip = require("express-static-gzip");
const cors = require('cors');

const HostProfile = require('./db/models/hostProfile');

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseTime());

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(expressStaticGzip(path.join(__dirname, '/../client/dist')));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/hostInfo', (req, res) => {
  HostProfile.find({})
    .then(data => {
      console.log('Successfully able to get data from Host profile DB');
      res.send(data);
    })
    .catch(err => {
      console.log('Error retrieving data from DB: ', err);
      res.status(500).send({ message: err.message })
    })
});

app.get('/hostInfo/:hostId', (req, res) => {
  console.log('test hostid:id')
  console.log('Parameter send by id in the req: ', req.params.hostId)
  HostProfile.findById(req.params.hostId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Host profile by id' })
      } else {
        console.log('Host profile by id Data: ', req.url);
        res.send(data);
      }
    })
    .catch(err => {
      console.log('Error retrieving blog id from DB: ', err);
      res.status(500).send({ message: 'Error retrieving host id from DB' })
    });
});

app.put('/hostInfo/:hostId', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params)
  let id = req.params.hostId;
  HostProfile.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Unable to update host by id=${id}!`
        });
      } else {
        res.send({
          message: "Host updated successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating the host by id`
      });
    });
});

module.exports = app;