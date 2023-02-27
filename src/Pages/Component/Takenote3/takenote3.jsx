import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

import ArchiveIcon from "@mui/icons-material/Archive";

import DeleteIcon from "@mui/icons-material/Delete";
import { sendToTrash } from "../../../Services/UserServices";

function Takenote3(props) {
  return (
    <div>
      <Card
        sx={{ width: "auto", height: "auto", backgroundColor: props.color }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {props.Title}
          </Typography>
          <Typography variant="body2" style={{ paragraph: "true" }}>
            {props.Description}
          </Typography>
        </CardContent>
        <CardActions>
          <ArchiveIcon />

          <DeleteIcon
            onClick={() =>
              sendToTrash(props.noteId).then((res) => {
                console.log("response", res);
                alert("Send to Trash");
              })
            }
          />

          <Button
            size="small"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Takenote3;
