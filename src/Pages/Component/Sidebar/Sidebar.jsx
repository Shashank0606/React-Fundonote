import React from "react";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="bar" onClick={() => props.setOption("allNotes")}>
        All Notes
      </div>
      <div className="bar" onClick={() => props.setOption("archive")}>
        Archive
      </div>
      <div className="bar" onClick={() => props.setOption("trash")}>
        Trash
      </div>
    </div>
  );
}

export default Sidebar;
