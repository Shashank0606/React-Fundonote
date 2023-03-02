import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import ArchiveIcon from "@mui/icons-material/Archive";
import ColorPopper from "../colorpopper/colorpopper";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  sendToTrash,
  sendToArchive,
  updateNotes,
} from "../../../Services/UserServices";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Takenote3(props) {
  const [editNoteObj, setEditNoteObj] = React.useState({
    title: props.Title,
    description: props.Description,
  });

  const [open, setOpen] = React.useState(false);
  const toggleModel = () => setOpen(!open);

  const [color, setColor] = useState("");
  const listenToColorPopper = (color) => {
    setColor(color);
    let apiData = {
      color,
      title: props.Title,
      description: props.Description,
    };
    updateNotes(apiData, props.note._id)
      .then((res) => {
        alert("Color Updated");
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  const taketitle = (event) => {
    setEditNoteObj((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const takedescription = (event) => {
    setEditNoteObj((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const handleSave = () => {
    let apiData = {
      ...editNoteObj,
      color: props.color,
    };
    updateNotes(apiData, props.note._id)
      .then((res) => {
        console.log("response", res);
        alert("Notes Updated");
        toggleModel();
        props.listenToDrawer("Notes");
      })
      .catch((err) => {
        console.log("error :", err);
      });
  };

  return (
    <div>
      {/* <div className="note-container" style={{ backgroundColor: color }}> */}
      <Card
        className="note-container"
        style={{ backgroundColor: color }}
        sx={{ width: "auto", height: "auto", backgroundColor: props.color }}
      >
        <CardContent>
          <Typography variant="h5" component="div" onClick={toggleModel}>
            {props.Title}
          </Typography>
          <Typography variant="body2" style={{ paragraph: "true" }}>
            {props.Description}
          </Typography>
        </CardContent>
        <CardActions>
          <ArchiveIcon
            onClick={() =>
              sendToArchive(props.noteId).then((res) => {
                console.log("response", res);
                alert("Send to Archive");
              })
            }
          />

          <DeleteIcon
            onClick={() =>
              sendToTrash(props.noteId).then((res) => {
                console.log("response", res);
                props.listenToDrawer("Notes");
              })
            }
          />
          <ColorPopper
            action={"create"}
            listenToColorPopper={listenToColorPopper}
          />
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={toggleModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardContent>
            <Typography variant="h5" component="div">
              <div className="title">
                <input
                  onChange={taketitle}
                  value={editNoteObj.title}
                  className="note-title"
                  type="text"
                  placeholder="Title"
                />
              </div>
            </Typography>
            <Typography variant="body2" style={{ paragraph: "true" }}>
              <div className="title">
                <input
                  onChange={takedescription}
                  value={editNoteObj.description}
                  className="note-body"
                  type="text"
                  placeholder="Take new note..."
                />
              </div>
            </Typography>
          </CardContent>
          <CardActions>
            <ArchiveIcon
              onClick={() =>
                sendToArchive(props.noteId).then((res) => {
                  console.log("response", res);
                  alert("Send to Archive");
                })
              }
            />

            <DeleteIcon
              onClick={() =>
                sendToTrash(props.noteId).then((res) => {
                  console.log("response", res);
                  alert("Send to Trash");
                })
              }
            />
            <ColorPopper
              action={"create"}
              listenToColorPopper={listenToColorPopper}
              popUpId={"model-popper"}
            />

            <Button
              size="small"
              onClick={handleSave}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Save
            </Button>
          </CardActions>
        </Box>
      </Modal>
      {/* </div> */}
    </div>
  );
}

export default Takenote3;
