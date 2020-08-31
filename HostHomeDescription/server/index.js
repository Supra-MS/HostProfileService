const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const HomeDescription = require('./db/models/homeDescription');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

/* match the ui router */
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});

app.get('/rooms', (req, res) => {
  HomeDescription.find({})
    .then(data => {
      console.log('Successfully able to get data from Home Description DB');
      res.send(data);
    })
    .catch(err => {
      console.log('Error retrieving data from DB: ', err);
      res.status(500).send({ message: err.message })
    });
});

app.get('/rooms/:roomId', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params);
  HomeDescription.findById(req.params.roomId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Home Description by id' });
      } else {
        // console.log('Home Description by id', data);
        res.send(data);
      }
    })
    .catch(err => {
      console.log('Error retrieving home description id - Title: ', err);
      res.status(500).send({ message: 'Error retrieving home description id - Title' });
    });
});

app.get('/rooms/:roomId/title', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params);
  HomeDescription.findById(req.params.roomId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Home Description by id - Title' });
      } else {
        console.log('Home Description by id - Title: ', data.title_section);
        res.send(data.title_section);
      }
    })
    .catch(err => {
      console.log('Error retrieving home description id - Title: ', err);
      res.status(500).send({ message: 'Error retrieving home description id - Title' });
    });
});

app.get('/rooms/:roomId/overview', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params);
  HomeDescription.findById(req.params.roomId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Home Description by id - Overview' });
      } else {
        console.log('Home Description by id - overview: ', data.overview_section);
        res.send(data.overview_section);
      }
    })
    .catch(err => {
      console.log('Error retrieving home description id - overview: ', err);
      res.status(500).send({ message: 'Error retrieving home description id - overview' })
    });
});

app.get('/rooms/:roomId/highlights', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params);
  HomeDescription.findById(req.params.roomId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Home Description by id - highlights' })
      } else {
        console.log('Home Description by id - highlights: ', data.highlights_section);
        res.send(data.highlights_section);
      }
    })
    .catch(err => {
      console.log('Error retrieving home description id - highlights: ', err);
      res.status(500).send({ message: 'Error retrieving home description id - highlights' })
    });
});

app.get('/rooms/:roomId/description', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params);
  HomeDescription.findById(req.params.roomId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Home Description by id - description' })
      } else {
        console.log('Home Description by id - description: ', data.description_section);
        res.send(data.description_section);
      }
    })
    .catch(err => {
      console.log('Error retrieving home description id - description: ', err);
      res.status(500).send({ message: 'Error retrieving home description id - description' })
    });
});

app.get('/rooms/:roomId/sleeping-arranges', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params);
  HomeDescription.findById(req.params.roomId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Home Description by id - sleeping-arranges' })
      } else {
        console.log('Home Description by id - sleeping-arranges: ', data.sleeping_arrangements_section);
        res.send(data.sleeping_arrangements_section);
      }
    })
    .catch(err => {
      console.log('Error retrieving home description id - sleeping-arranges: ', err);
      res.status(500).send({ message: 'Error retrieving home description id - sleeping-arranges' })
    });
});

app.get('/rooms/:roomId/amenities', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params);
  HomeDescription.findById(req.params.roomId)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Unable to find the Home Description by id - amenities' })
      } else {
        console.log('Home Description by id - amenities: ', data.amenities_section);
        res.send(data.amenities_section);
      }
    })
    .catch(err => {
      console.log('Error retrieving home description id - amenities: ', err);
      res.status(500).send({ message: 'Error retrieving home description id - amenities' })
    });
});

app.post('/rooms', (req, res) => {
  HomeDescription.create({
    _id: req.body._id,
    amenities_section: {},
    sleeping_arrangements_section: {},
    description_section: {},
    highlights_section: {},
    overview_section: {},
    title_section: {}
  })
  .then(data => {
    res.send(data);
  })
  .catch(error => {
    res.status(500).send({message: error.message || 'Error in creating the topic'});
  })
})

// Commented this out for testing
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});


module.exports = app;