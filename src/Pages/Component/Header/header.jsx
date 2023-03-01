import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountBoxIcon from "@mui/icons-material/AccountBox";



export default function Header1(props) {

  const callFromHeader = () => {
    props.listenToHeader()
  }

  // const [displayNav, setDisplayNav] = useState(false)

  return (
    <div className="header">
      <div className="left">
        <MenuIcon onClick={callFromHeader} />
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Keep Icon"
        />
        <div className="keep">Keep</div>
      </div>
      <div className="search">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 700,
          }}
        >
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </div>
      <div className="reload">
        <RefreshIcon />
        <ViewStreamIcon />
        <SettingsIcon />
      </div>
      <div className="option">
        <AppsIcon />
        <AccountBoxIcon />
      </div>
    </div>
  );
}
