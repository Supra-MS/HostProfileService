const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../client/dist'));

app.get('/hostInfo/:hostId', (req, res) => {
  console.log('Parameter send by id in the req: ', req.params)
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
