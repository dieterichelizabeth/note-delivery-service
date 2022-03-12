const express = require('express')
const app = express()

app.use(express.json());
// keep html files static
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
    res.sendFile(__dirname + '/db/notes.json');
});

// save a new note
app.post('/api/notes', (req, res) => {
    // save on the request body
    console.log(req.body);
    res.json(req.body);
    // add to the db.json file (with unique id)
  
    // return the new note to the client
})

// delete a note
app.delete('/api/delete', (req, res) => {

})

// display the index.html file
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });


app.listen(3001)
