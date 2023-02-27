import React from "react";
import TakeNote1 from "../Component/Takenote1/takenote1";
import TakeNote2 from "../Component/takenote2/takenote2";
import TakeNote3 from "../Component/Takenote3/takenote3";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { getNotes, getTrashedNotes, getArchiveNotes } from "../../Services/UserServices";
import Header1 from "../Component/Header/header";
import Sidebar from "../Component/Sidebar/Sidebar";

export default function Dashboard1() {
  const [allnotes, setAllnotes] = React.useState([]);
  const [shiftNote, setShiftNote] = React.useState(false);
  const [option, setOption] = React.useState("");

  const opTn1 = () => {
    setShiftNote(true);
  };

  const opTn2 = () => {
    setShiftNote(false);
  };

  React.useEffect(() => {
    if (option === "archive") {
      getArchiveNotes()
        .then((response) => {
          setAllnotes([...response.data.data]);
        })
        .catch((err) => {
          console.log("error :", err);
        });
    } else if (option === "trash") {
      getTrashedNotes()
        .then((response) => {
          setAllnotes([...response.data.data]);
        })
        .catch((err) => {
          console.log("error :", err);
        });
    } else {
      getNotes()
        .then((response) => {
          setAllnotes([...response.data.data]);
        })
        .catch((err) => {
          console.log("error :", err);
        });
    }
  }, [option]);

  // let arrayOfAllNotes = [];
  // const gettingAllNotes = async () => {
  //     arrayOfAllNotes = await getNotes();
  //     setAllnotes(arrayOfAllNotes);
  // };

  // React.useEffect(() => {
  //     gettingAllNotes();
  // }, []);

  return (
    <div>
      {/* <DashContext.Provider value={gettingAllNotes}> */}
      <div>
        <Header1 />
        <Sidebar setOption={setOption} />
      </div>
      {/* <TakeNote1 /> */}
      {/* <TakeNote2 /> */}

      {shiftNote ? <TakeNote2 opTn2={opTn2} /> : <TakeNote1 opTn1={opTn1} />}

      {/* <Container
                    className="container1"
                    style={{ width: "80vw", marginTop: "55px" }}
                >
                    <Grid container spacing={2} className="gridbox">
                        {allnotes.map((note) => (
                            <Grid item lg={3} md={6} sm={12} xs={12}>
                                <TakeNote3 note={note} />
                            </Grid>
                        ))}
                    </Grid>
                </Container> */}

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
