import React from "react";
import TakeNote1 from "../Component/Takenote1/takenote1";
import TakeNote2 from "../Component/takenote2/takenote2";
import TakeNote3 from "../Component/Takenote3/takenote3";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import {
  getNotes,
  getTrashedNotes,
  getArchiveNotes,
} from "../../Services/UserServices";
import Header1 from "../Component/Header/header";
import Sidebar from "../Component/Sidebar/Sidebar";

import MiniDrawer from "../Component/Drawer/drawer";

export default function Dashboard1() {
  const [allnotes, setAllnotes] = React.useState([]);
  const [shiftNote, setShiftNote] = React.useState(false);
  const [option, setOption] = React.useState("");

  const [drawer, setDrawer] = React.useState(false);
  const listenToHeader = () => {
    setDrawer(!drawer);
  };

  const opTn1 = () => {
    setShiftNote(true);
  };

  const opTn2 = () => {
    setShiftNote(false);
  };

  // const Nav = () => {
  //   setShiftNav(true);
  // };

  const listenToDrawer = (setOption) => {
    if (setOption === "Notes") {
      getNotes().then((response) => {
        setAllnotes([...response.data.data]);
      });
    } else if (setOption === "Archive") {
      getArchiveNotes().then((response) => {
        setAllnotes([...response.data.data]);
      });
    } else if (setOption === "Trash") {
      getTrashedNotes().then((response) => {
        setAllnotes([...response.data.data]);
      });
    }
  };

  React.useEffect(() => {
    listenToDrawer("Notes");
  }, []);

  return (
    <div>
      {/* <DashContext.Provider value={gettingAllNotes}> */}
      <div>
        <Header1 listenToHeader={listenToHeader} />
        {/* <Sidebar setOption={setOption} /> */}
        <MiniDrawer
          open={drawer}
          listenToDrawer={listenToDrawer}
          listenToHeader={listenToHeader}
        />
      </div>

      {shiftNote ? (
        <TakeNote2 opTn2={opTn2} listenToDrawer={listenToDrawer} />
      ) : (
        <TakeNote1 opTn1={opTn1} />
      )}

      <div>
        <Container
          className="container1"
          style={{ width: "100vw", marginTop: "55px", marginLeft: "15vw" }}
        >
          <Grid container spacing={3} className="box2">
            {allnotes.map((note, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                <TakeNote3
                  note={note}
                  Title={note.title}
                  Description={note.description}
                  color={note.color}
                  noteId={note._id}
                  listenToDrawer={listenToDrawer}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      {/* </DashContext.Provider> */}
    </div>
  );
}
