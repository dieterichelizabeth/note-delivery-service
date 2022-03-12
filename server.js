const express = require('express')
const app = express()

// return the index.html file
app.get('*', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');
  });

// return the notes/html file
app.get('/notes', (req, res) => {

    res.sendFile(__dirname + '/public/notes.html');
  });

// read the db.json file and retunr all saves notes as JSON
app.get('/api/notes', (req, res) => {

});

// save a new note
app.post('/api/notes', (req, res) => {
    // save on the request body

    // add to the db.json file (with unique id)

    // return the new note to the client
})

// delete a note
app.delete('/api/delete', (req, res) => {
    
})

app.listen(3001)
