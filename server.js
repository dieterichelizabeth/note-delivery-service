const express = require('express')
const app = express()

app.use(express.static("public"))

// display the notes/html file
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
  });

const apiRouter = require('./routes/notes')
app.use('/api', apiRouter)

// display the index.html file
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });


app.listen(3001)
