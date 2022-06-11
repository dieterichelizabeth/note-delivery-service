const fs = require("fs");
const express = require("express");
const router = express.Router();
const db = require("../db/notes.json");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Route: /api/notes
// Get - returns all saved notes as JSON
router.get("/notes", (req, res) => {
  res.json(db.notes);
});

// Route: /api/notes
// Post - Saves a new note to the db.json file and returns it to the client
router.post("/notes", (req, res) => {
  // adds unique id
  req.body.id = uuidv4();

  // send new note and db to addNote()
  const note = addNote(req.body, db);
  res.json(note);
});

function addNote(body, db) {
  // save the request body
  const notes = body;

  // add to the db.json file
  db.notes.push(notes);
  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify({ notes: db.notes }, null, 2)
  );

  return notes;
}

// Route: /api/notes/${id}
// Delete - removes a "note" from the db.json file (located through the id query parameter)
router.delete("/notes/:id", (req, res) => {
  // get the id
  noteToDelete = req.params.id;

  // send note id and db to deleteNote()
  const note = deleteNote(noteToDelete, db);
  res.json(note);
});

function deleteNote(noteToDelete, db) {
  // remove the note with the given id property
  const notes = db.notes;

  // find the index
  const indexOfNote = notes.findIndex((object) => {
    return object.id === noteToDelete;
  });
  // then splice it
  notes.splice(indexOfNote, 1);

  // rewrite the notes to the db.json file
  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify({ notes: db.notes }, null, 2)
  );

  return notes;
}

module.exports = router;
