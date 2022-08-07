import {useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "62ed354c16771c667044e6a5",
          "user": "62ed1f5e8a7b8b3fa1e13468",
          "title": "my title",
          "description": "personal",
          "tag": "pers",
          "date": "2022-08-05T15:20:44.449Z",
          "__v": 0
        },
        {
          "_id": "62ed3694173510809e609a45",
          "user": "62ed1f5e8a7b8b3fa1e13468",
          "title": "my title updated",
          "description": "personal updated",
          "tag": "pers",
          "date": "2022-08-05T15:26:12.136Z",
          "__v": 0
        },
        {
            "_id": "62ed3692173510809e609a3f",
            "user": "62ed1f5e8a7b8b3fa1e13468",
            "title": "title",
            "description": "something",
            "tag": "pers",
            "date": "2022-08-05T15:26:10.476Z",
            "__v": 0
          },
          {
            "_id": "62ed3693173510809e609a41",
            "user": "62ed1f5e8a7b8b3fa1e13468",
            "title": "fourth title",
            "description": "description fourth",
            "tag": "pers",
            "date": "2022-08-05T15:26:11.075Z",
            "__v": 0
          },
          {
            "_id": "62ed3693173510809e609a43",
            "user": "62ed1f5e8a7b8b3fa1e13468",
            "title": "legend title",
            "description": "bullshit title",
            "tag": "pers",
            "date": "2022-08-05T15:26:11.577Z",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;