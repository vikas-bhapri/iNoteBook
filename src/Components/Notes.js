import { React, useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';


const Notes = () => {

    const context = useContext(noteContext);
    const { notes, getNotes } = context

    useEffect(() => {
        getNotes();
    }, [])
    
    return (
        <>
        <AddNote/>
        <div>
            <h2>Your Notes</h2>
            <div className="row my-3">
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>

        </div>
        </>
    )
}

export default Notes