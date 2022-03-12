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

app.get('/api/notes', (req, res) => {
    res.sendFile(__dirname + '/db/notes.json');
});

// save a new note
app.post('/notes', (req, res) => {

    // save on the request body
    // add to the db.json file (with unique id)
    // return the new note to the client
})

// delete a note
app.delete('/delete', (req, res) => {

})

// display the index.html file
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });


app.listen(3001)
