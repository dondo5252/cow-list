const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const db = require('../database/index.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json())

//CREATE
app.post('/api/cows', (req, res) => {

  db.create(req.body.name, req.body.description)
 .then((response) => {
   res.status(200).send('app.post worked!');
 })
 .catch((error) => {
   console.log(error, 'you have an error in app.PPOSSTTTT')
 })
})


//READ
app.get('/api/cows', (req, res) => {
   db.get()
  .then((response) => {
    console.log("app.get success!")
    res.status(200).send(response[0]);
  })
  .catch((error) => {
    console.log(error, 'you have an error in app.get')
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
