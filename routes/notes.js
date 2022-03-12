const express = require('express')
const router = express.Router()

// read the db.json file and retunr all saves notes as JSON
router.get('/notes', (req, res) => {
    res.send('We are returning Json')
});

// save a new note
router.post('/notes', (req, res) => {
    res.send('We are adding a new note')
    // save on the request body
    // add to the db.json file (with unique id)
    // return the new note to the client
})

// delete a note
router.delete('/delete', (req, res) => {
    res.send('We are deleting a note')
})

module.exports = router