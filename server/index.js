const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('../db/queries.js');
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0'

app.use(express.static('client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/******************** Database queries *********************/

app.get('/name/:name', db.getPerson);
app.get('/options/:name', db.getOptions);

app.post('/name/:name', db.insertPerson);
app.post('/options/:name', db.insertOptions);

/******************** Get from BoredAPI **********************/

app.get('/api/activity', (req, res) => {
  axios.get('http://www.boredapi.com/api/activity')
    .then(response => res.status(200).send(response.data.activity))
    .catch(err => res.send(err));
})

app.listen(PORT, HOST);
console.log(`Server listening on port: ${PORT}`);