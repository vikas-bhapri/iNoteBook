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
    setNotes(json)
  }

  const addNote = async (title, description, tag) => {
    // console.log(title, description, tag)
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZDFmNWU4YTdiOGIzZmExZTEzNDY4In0sImlhdCI6MTY1OTcwNzIzMH0.f1FJDS2NkHGGZNynhYtyvXyD2bX7g7DIwmXAHrVlLfw"
      },
      body: JSON.stringify({title, description, tag}) 
      
    });
    // console.log(JSON.stringify({title, description, tag}))
    const json = await response.json()
    console.log(json)
    setNotes(notes.concat(json))

  }

  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZDFmNWU4YTdiOGIzZmExZTEzNDY4In0sImlhdCI6MTY1OTcwNzIzMH0.f1FJDS2NkHGGZNynhYtyvXyD2bX7g7DIwmXAHrVlLfw"
      }
    });
    const json = await response.json()
    console.log(json)

    //Logic to delete the note
    console.log("Deleting the note with id", id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  const editNote = async (id, title, description, tag) => {
    
    console.log(id,title,description,tag)
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZDFmNWU4YTdiOGIzZmExZTEzNDY4In0sImlhdCI6MTY1OTcwNzIzMH0.f1FJDS2NkHGGZNynhYtyvXyD2bX7g7DIwmXAHrVlLfw"
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const editJson = response.json()
    console.log(editJson)
    //const json = response.json()
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag
        break
      }
    }
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;