import React from 'react'
import '../App.css'

const NoteItem = (props) => {
    const { note } = props
    return (
        <div className='col-md-3'>
            {/* {note.title}
            {note.description} */}
            <div className="card my-3 mx-3">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i style={{cursor:"pointer"}} className="fa-solid fa-pen mx-2"></i>
                        <i style={{cursor:"pointer"}} className="fas fa-trash mx-2"></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem