// import React, { useEffect, useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';
// import { Grid } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import ViewStreamIcon from '@mui/icons-material/ViewStream';
// import SettingsIcon from '@mui/icons-material/Settings';
// import AppsIcon from '@mui/icons-material/Apps';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import DoneIcon from '@mui/icons-material/Done';
// import BrushIcon from '@mui/icons-material/Brush';
// import ImageIcon from '@mui/icons-material/Image';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import RedoIcon from '@mui/icons-material/Redo';
// import UndoIcon from '@mui/icons-material/Undo';
// import { getNotes } from "../../Services/UserServices";
// import Takenote3 from "../Component/Takenote3/takenote3";

// import ColorPopper from "../Component/colorpopper/colorpopper";

// export const DashContext = React.createContext()


// export default function Dashboard() {

//     const [notes, setNotes] = useState([]);
//     const [isNoteFocused, setIsNoteFocused] = useState(false);

//     const [color, setColor] = React.useState('')

//     const listenToColorPopper = (color) => {
//         setColor(color)
//     }

//     useEffect(() => {
//         async function fetchnote() {
//             let notesArray = await getNotes()
//             setNotes(notesArray.data.data)
//             console.log(notesArray.data.data);
//         }
//         fetchnote()

//     }, [])
//     // let arrayOfAllNotes = [];
//     // const gettingAllNotes = async () => {
//     //     arrayOfAllNotes = await getNotes();
//     //     setNotes(arrayOfAllNotes);
//     // };

//     // useEffect(() => {
//     //     gettingAllNotes();
//     // }, []);

//     return (
//         <div>
//             {/* <DashContext.Provider value={fetchnote}> */}
//             <div className="header">
//                 <div className="left">
//                     <MenuIcon />
//                     <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
//                         alt="Keep Icon" />
//                     <div className="keep">Keep</div>
//                 </div>
//                 <div className="search">
//                     <Paper
//                         component="form"
//                         sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700 }}
//                     >
//                         <IconButton type="button" aria-label="search">
//                             <SearchIcon />
//                         </IconButton>
//                         <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                         <InputBase
//                             sx={{ ml: 1, flex: 1 }}
//                             placeholder="Search"
//                             inputProps={{ 'aria-label': 'search google maps' }}
//                         />
//                     </Paper>
//                 </div>
//                 <div className="reload">
//                     <RefreshIcon />
//                     <ViewStreamIcon />
//                     <SettingsIcon />
//                 </div>
//                 <div className="option">
//                     <AppsIcon />
//                     <AccountBoxIcon />
//                 </div>
//             </div>
//             <div className="note">
//                 {
//                     isNoteFocused ? <div className="note-container" style={{ backgroundColor: color }}>
//                         <input type="text" className="note-title" placeholder="Title..." />
//                         <input type="text" className="note-body" placeholder="Take a note..." />
//                         <div className="icons1">
//                             <NotificationsActiveIcon />
//                             <PersonAddIcon />
//                             {/* <ColorLensIcon /> */}
//                             <ColorPopper action={'create'} listenToColorPopper={listenToColorPopper} />
//                             <ImageIcon />
//                             <ArchiveIcon />
//                             <MoreVertIcon />
//                             <RedoIcon />
//                             <UndoIcon />
//                             <span className="close-icon" onClick={() => setIsNoteFocused(false)}>close</span>
//                         </div>
//                     </div>
//                         : <div className="notes-box" onClick={() => setIsNoteFocused(true)}>
//                             Take a note...
//                             <div className="icons">
//                                 <DoneIcon />
//                                 <BrushIcon />
//                                 <ImageIcon />
//                             </div>
//                         </div>
//                 }

//             </div>
//             <div>

//                 <Grid className="container1"
//                     style={{ width: "100vw", marginTop: "55px" }}>
//                     <Grid container spacing={3}
//                         className="box2">
//                         {notes.map((note) =>
//                             <Grid item lg={3} md={4} sm={6} xs={12}>
//                                 < Takenote3
//                                     Title={note.title}
//                                     Description={note.description} />
//                             </Grid>)
//                         }
//                     </Grid>
//                 </Grid>
//             </div>
//             {/* </DashContext.Provider> */}
//         </div >
//     )

// }

