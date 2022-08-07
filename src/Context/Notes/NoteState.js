import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = 'http://localhost:3001'
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  const getNotes = async () => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZDFmNWU4YTdiOGIzZmExZTEzNDY4In0sImlhdCI6MTY1OTcwNzIzMH0.f1FJDS2NkHGGZNynhYtyvXyD2bX7g7DIwmXAHrVlLfw"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  const addNote = async (title, description, tag) => {
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZDFmNWU4YTdiOGIzZmExZTEzNDY4In0sImlhdCI6MTY1OTcwNzIzMH0.f1FJDS2NkHGGZNynhYtyvXyD2bX7g7DIwmXAHrVlLfw"
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const json = response.json()

    setNotes(notes.concat(json))

  }

  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting the note with id", id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZDFmNWU4YTdiOGIzZmExZTEzNDY4In0sImlhdCI6MTY1OTcwNzIzMH0.f1FJDS2NkHGGZNynhYtyvXyD2bX7g7DIwmXAHrVlLfw"
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const json = response.json()

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;