const fs = require('fs');
const express = require('express')
const router = express.Router()
const db = require('../db/notes.json');
const path = require('path');

// uuid package
// https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');

router.use(express.json());


// get the json file
router.get('/notes', (req, res) => {
    res.json( db.notes );
});

// save a new note
router.post('/notes', (req, res) => { 
    // adds unique id
    req.body.id = uuidv4();

    // send new note and db to addNote()
    const note = addNote(req.body, db);
    res.json(note);    
})

function addNote(body, db) {
    // save on the request body
    const notes = body;
  
    // add to the db.json file 
    db.notes.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: db.notes }, null, 2)
      );

    // return the new note to the client
    return notes;
  }
  
// delete a note (recieves query parameter)
router.delete('/notes/:id', (req, res) => {
    // get the id
    delte = req.params.id;
    console.log(req.params.id)

    // remove the note with the given id property
    // const idArray = db.notes.map((notes) => notes.id); - returns all id's
    // const resulted = db.notes.filter((notes) => notes.id = id); - turns all id's into the id param
    // find the index, then splice it
    // const noteToDelete = db.notes.findIndex(db.notes.id = id) - does not work
    // console.log(db.notes.findIndex(not => not.id = delte)); - returns '0'
    const arr = db.notes;

    const index = arr.findIndex(object => {
      return object.id === delte;
    });

    arr.splice(index, 1)
    console.log(index);
    console.log(arr);
  

    // rewrite the notes to the db.json file
    // fs.writeFileSync(
    //   path.join(__dirname, '../db/notes.json'),
    //   JSON.stringify({ deleteNote: db.notes }, null, 2)
    // );

    // return the new note to the client
    // return notes;
})

module.exports = router