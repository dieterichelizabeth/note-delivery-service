const express = require('express')
const router = express.Router()

router.use(express.json());

const { noteslist } = require('../db/notes.json')

// read the db.json file and retunr all saves noteslist as JSON
router.get('/notes', (req, res) => {
    console.log("hello world")
    res.sendFile('../db/notes.json');
});

// save a new note
router.post('/notes', (req, res) => {

    // save on the request body
    // add to the db.json file (with unique id)
    // return the new note to the client
})

// delete a note
router.delete('/delete', (req, res) => {

})

module.exports = router