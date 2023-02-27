import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
// import { DashContext } from "../../Dashboard/dashboard";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { updateColor } from "../../../Services/UserServices";

export default function ColorPopper({ action, listenToColorPopper, note }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const DashContext = React.createContext();
  const refreshDashboard = React.useContext(DashContext);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const colors = ["red", "blue", "orange"];

  const selectColor = async (color) => {
    if (action === "create") {
      listenToColorPopper(color);
    } else {
      note["color"] = color;
      let response = await updateColor(note, note._id);
      refreshDashboard();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <span
        //   aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        <ColorLensIcon />{" "}
      </span>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{ border: 1, p: 1, bgcolor: "background.paper", display: "flex" }}
        >
          {colors.map((color) => (
            <div
              onClick={() => selectColor(color)}
              style={{
                borderRadius: 50,
                width: 35,
                height: 35,
                margin: 10,
                backgroundColor: color,
              }}
            ></div>
          ))}
        </Box>
      </Popper>
    </div>
  );
}
