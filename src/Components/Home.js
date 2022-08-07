import {React, useContext} from 'react'
import noteContext from '../Context/Notes/NoteContext';
import AddNote from './AddNote';
import Notes from './Notes';

export const Home = () => {

  const context = useContext(noteContext);


  return (
    <>
    <div className="container my-3">
     <Notes/>
      </div>
    </>
  )
}

export default Home