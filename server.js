const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(__dirname)

    res.sendFile(__dirname + '/public/index.html');
  });

app.listen(3001)