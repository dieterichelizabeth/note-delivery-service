const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(__dirname)

    res.sendFile(__dirname + '/public/index.html');
  });

app.get('/notes', (req, res) => {
    console.log(__dirname)

    res.sendFile(__dirname + '/public/notes.html');
  });

app.listen(3001)