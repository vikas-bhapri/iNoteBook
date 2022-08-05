const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser.js");
const Notes = require("../models/Notes.js");
const { body, validationResult } = require("express-validator");

//Route 1: Get all the notes of the user using GET 'api/notes/fetchallnotes'. Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 2: Add a new note using POST 'api/notes/addnote'. Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Check for errors in user input
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//Route 3: Update an existing node using PUT '/api/notes/updatenote'. Login required

router.put('/updatenote:id', fetchuser, async (req,res) => {
  const {title, description, tag} = req.body
  const newNote = {}
  if(title){newNote.title = title} 
  if(description){newNote.description = description} 
  if(tag){newNote.tag = tag} 

  //find the note to be updated
  let note = await Notes.findById(req.params.id)
  if(!note){
    return res.status(400).send("Not found!")
  }
  if(note.user.toString() !== req.user.id){
    return res.status(503).send("Not allowed")
  }
  note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
  res.json({note}) 
})

module.exports = router;
