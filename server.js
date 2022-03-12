const express = require('express');
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
const apiRouter = require('./routes/notes')
app.use('/api', apiRouter)

// display the index.html file
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
