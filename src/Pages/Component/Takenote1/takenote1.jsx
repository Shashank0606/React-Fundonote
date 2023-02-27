import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import BrushIcon from "@mui/icons-material/Brush";
import ImageIcon from "@mui/icons-material/Image";

export default function TakeNote1(props) {
  const shiftNote = () => {
    props.opTn1();
  };
  return (
    <div className="notes-box" onClick={shiftNote}>
      Take a note...
      <div className="icons">
        <DoneIcon />
        <BrushIcon />
        <ImageIcon />
      </div>
    </div>
  );
}
