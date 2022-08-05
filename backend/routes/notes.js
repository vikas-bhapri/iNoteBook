const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser.js");
const Notes = require("../models/Notes.js");
const { body, validationResult } = require("express-validator");

//Route 1: Get all the notes of the user using GET 'api/notes/fetchallnotes'. Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json([]);
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

module.exports = router;
