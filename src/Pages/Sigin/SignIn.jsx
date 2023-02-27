import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { logIn } from "../../Services/UserServices";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

export default function Signin() {
  const [signInObj, setSignInObj] = React.useState({ email: "", password: "" });

  const [signInObjRegex, setSignInObjRegex] = React.useState({
    emailError: false,
    passError: false,
    emailHelper: "",
    passHelper: "",
  });

  const takeEmail = (event) => {
    setSignInObj((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const takePassword = (event) => {
    setSignInObj((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };
  const submit = async () => {
    let emailTest = emailRegex.test(signInObj.email);
    let passwordTest = passwordRegex.test(signInObj.password);
    if (emailTest) {
      setSignInObjRegex((prevState) => ({
        ...prevState,
        emailError: false,
        emailHelper: "",
      }));
    } else {
      setSignInObjRegex((prevState) => ({
        ...prevState,
        emailError: true,
        emailHelper: "Enter Correct Email",
      }));
    }
    if (passwordTest) {
      setSignInObjRegex((prevState) => ({
        ...prevState,
        passError: false,
        passHelper: "",
      }));
    } else {
      setSignInObjRegex((prevState) => ({
        ...prevState,
        passError: true,
        passHelper: "Enter Valid Password",
      }));
    }
    if (emailTest && passwordTest) {
      //   let apiData1 = {
      //     email: signInObj.email,
      //     password: signInObj.password,
      //   };
      //   logIn(apiData1).then((res) => {
      //     alert("Login Succesgully");
      //     console.log("response", res);
      //   });
    }
    localStorage.removeItem("token");
    let response = await logIn(signInObj);
    console.log(response);
    alert(response.data.data);
    localStorage.setItem("token", response.data.data);
    return response;
  };

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
                error={signInObjRegex.emailError}
                helperText={signInObjRegex.emailHelper}
                onChange={takeEmail}
              />
            </div>
            <div className="second-custom-input">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                error={signInObjRegex.passError}
                helperText={signInObjRegex.passHelper}
                onChange={takePassword}
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
              {/* <button className="nxt-btn">Next</button> */}
              {/* <button onClick={submit}></button> */}
              <button className="nxt-btn" onClick={submit}>
                Submit
              </button>
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
