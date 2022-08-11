import {React, useContext, useState} from 'react'
import noteContext from '../Context/Notes/NoteContext';


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    const handleClick = () => {
        deleteNote(note._id)
        console.log("Click")
        
    }

    const handleEdit = () => {
        updateNote(note)

    }

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <button className="btn btn-outline-danger mx-2" type='button' style={{fontSize:'11px'}} onClick={handleClick}>DELETE</button>
                        <button className="btn btn-outline-primary mx-2" type='button' style={{fontSize:'11px'}} onClick={handleEdit} >EDIT</button>
                       
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem