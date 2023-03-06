import React, { useReducer, useEffect } from 'react';
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

const initialState = {
    allnotes: [],
    shiftNote: false,
    option: '',
    drawer: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'setAllnotes':
            return { ...state, allnotes: action.payload };
        case 'setShiftNote':
            return { ...state, shiftNote: action.payload };
        case 'setOption':
            return { ...state, option: action.payload };
        case 'setDrawer':
            return { ...state, drawer: action.payload };
        default:
            return state;
    }
}

export default function Dashboard1() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        listenToDrawer("Notes");
    }, []);

    const listenToHeader = () => {
        dispatch({ type: 'setDrawer', payload: !state.drawer });
    };

    const opTn1 = () => {
        dispatch({ type: 'setShiftNote', payload: true });
    };

    const opTn2 = () => {
        dispatch({ type: 'setShiftNote', payload: false });
    };

    const listenToDrawer = (setOption) => {
        if (setOption === "Notes") {
            getNotes().then((response) => {
                dispatch({ type: 'setAllnotes', payload: response.data.data });
            });
        } else if (setOption === "Archive") {
            getArchiveNotes().then((response) => {
                dispatch({ type: 'setAllnotes', payload: response.data.data });
            });
        } else if (setOption === "Trash") {
            getTrashedNotes().then((response) => {
                dispatch({ type: 'setAllnotes', payload: response.data.data });
            });
        }
        dispatch({ type: 'setOption', payload: setOption });
    };

    return (
        <div>
            <div>
                <Header1 listenToHeader={listenToHeader} />
                <MiniDrawer
                    open={state.drawer}
                    listenToDrawer={listenToDrawer}
                    listenToHeader={listenToHeader}
                    dispatch={dispatch}
                />
            </div>

            {state.shiftNote ? (
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
                        {state.allnotes.map((note, index) => (
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
        </div>
    );
}
