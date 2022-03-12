const fs = require('fs');
const express = require('express');
const db = require('./db/notes.json');
const path = require('path');

const app = express()
// PORT
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// display the notes/html file
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
  });

// links api routes
// const apiRouter = require('./routes/notes')
// app.use('/api', apiRouter)
// const { notesList } = "/db/notes.json";

// get the json file
app.get('/api/notes', (req, res) => {
    res.json( db );
});

// save a new note
app.post('/api/notes', (req, res) => { 
    // send new note and db to addNote()
    const note = addNote(req.body, db);
    res.json(note);    
})

function addNote(body, db) {
    console.log(body);
    // save on the request body
    const notes = body;
  
    // add to the db.json file (with unique id)
    db.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '/db/notes.json'),
        JSON.stringify({ notes: db }, null, 2)
      );
    // return the new note to the client
    return notes;
  }
  
// delete a note
app.delete('/api/delete', (req, res) => {

})

// display the index.html file
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
