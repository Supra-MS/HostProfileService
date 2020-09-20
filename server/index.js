const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const HostProfile = require('./db/models/hostProfile');

const app = express();
const PORT = 3006;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

/* match the ui router */
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});


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
  console.log('Parameter send by id in the req: ', req.params.hostId)
  HostProfile.findById(req.params.hostId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Host profile by id' })
      } else {
        console.log('Host profile by id Data: ', data);
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

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
