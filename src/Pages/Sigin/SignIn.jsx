import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import "./signin.css";

export default function Signin() {
  return (
    <div className="container">
      <div>
        <div className="box-container">
          <div className="heading">
            <img
              src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
              alt="google_img"
            />
          </div>
          <div className="title">Sign in</div>
          <div className="sub-title">Use Your Google Account</div>
          <div className="input-field">
            {/* <input type={"text"} /> */}
            <div className="custom-input">
              <TextField
                id="outlined-basic"
                label="Email or Phone"
                variant="outlined"
              />
            </div>
            <div className="second-custom-input">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <span className="forget-password">Forget password?</span>
          </div>
          <p className="sub-text">
            <div>Not your computer? Use Guest mode to sign in privately</div>
            <a className="learn-more" href="/">
              Learn More
            </a>
          </p>
          <div className="bottom-container">
            <span className="create-account">
              <span className="create-btn">Create Account</span>
            </span>
            <span className="next">
              <button className="nxt-btn">Next</button>
            </span>
          </div>
        </div>
        <div className="lang">
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={20}
            //   onChange={handleChange}
            label="Age"
          >
            <MenuItem value="English (United State)">
              <em>English (United State)</em>
            </MenuItem>
            <MenuItem value={10}>Hindi(Bharat)</MenuItem>
            <MenuItem value={20}>English (United State)</MenuItem>
            <MenuItem value={30}>marvari(Rajasthani)</MenuItem>
          </Select>
          <div className="bottom-link">
            <a href="/help">Help</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
}
