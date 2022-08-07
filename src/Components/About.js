import {React, useContext, useEffect} from 'react'
import noteContext from '../Context/Notes/NoteContext'

const About = () => {
  const a = useContext(noteContext)
  
  return (
    <div>This is about </div>
  )
}

export default About