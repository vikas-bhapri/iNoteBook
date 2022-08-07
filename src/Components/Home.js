import {React, useContext} from 'react'
import noteContext from '../Context/Notes/NoteContext';
import Notes from './Notes';

export const Home = () => {

  const context = useContext(noteContext);
  const {notes, setNotes} = context


  return (
    <>
    <div className="container my-3">
      <h2>
        Welcome to iNotebook
      </h2>
      
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
     <Notes/>
      </div>
    </>
  )
}

export default Home