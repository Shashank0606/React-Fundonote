import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import { postNotes } from "../../../Services/UserServices";
import ColorPopper from "../colorpopper/colorpopper";

export default function TakeNote2(props) {
  // const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", description: "" });

  const [color, setColor] = useState("");

  const Note2to1 = async () => {
    let apiData = note;
    if (color) {
      apiData.color = color;
    }
    let response = await postNotes(apiData);
    console.log(response);
    props.opTn2();
  };

  const taketitle = (event) => {
    setNote((prevState) => ({ ...prevState, title: event.target.value }));
  };
  const takedescription = (event) => {
    setNote((prevState) => ({ ...prevState, description: event.target.value }));
  };

  // useEffect(() => {
  //     async function fetchnote() {
  //         // let notesArray = await getNotes()
  //         // setNotes(notesArray.data.data)
  //         // console.log(notesArray.data.data);
  //         let response = await getNotes(note)
  //         console.log(response)
  //         props.opTn2();
  //     }
  //     fetchnote()

  // }, [])

  const listenToColorPopper = (color) => {
    setColor(color);
  };

  return (
    <div className="note-container" style={{ backgroundColor: color }}>
      {/* <input type="text" className="note-title" placeholder="Title..." /> */}
      <div className="title">
        <input
          onChange={taketitle}
          className="note-title"
          type="text"
          placeholder="Title"
        />
      </div>
      {/* <input type="text" className="note-body" placeholder="Take a note..." /> */}
      <div className="title">
        <input
          onChange={takedescription}
          className="note-body"
          type="text"
          placeholder="Take new note..."
        />
      </div>

      <div className="icons1">
        <NotificationsActiveIcon />
        <PersonAddIcon />
        {/* <ColorLensIcon /> */}
        <ColorPopper
          action={"create"}
          listenToColorPopper={listenToColorPopper}
        />
        <ImageIcon />
        <ArchiveIcon />
        <MoreVertIcon />
        <RedoIcon />
        <UndoIcon />
        {/* <Button variant="text" onClick={shiftNote2to1}>CLOSE</Button> */}
        <button className="close-icon" onClick={Note2to1}>
          Save
        </button>
      </div>
    </div>
  );
}
