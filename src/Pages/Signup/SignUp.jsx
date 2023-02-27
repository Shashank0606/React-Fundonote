import { Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";
import { registerUser } from "../../Services/UserServices";

export default function SignUp() {

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  var regName = /^[A-Z]{1}[a-zA-Z]+$/;

  const [showPassword, setShowPassword] = useState(false);

  const [signUp, setSignUp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpValidation, setSignUpValidation] = useState({
    emailError: false,
    passError: false,
    emailHelper: "",
    passHelper: "",
    firstnameError: false,
    lastnameError: false,
    firstnameHelper: "",
    lastnameHelper: "",
    confirmPassError: false,
    confirmPassHelper: "",
  });

  const updateValue = (event, key) => {
    setSignUp((prevState) => ({ ...prevState, [key]: event.target.value }));
  };

  const validateField = (key, regex, validatingField) => {
    let validTest = regex.test(signUp[key]);
    if (validTest) {
      setSignUpValidation((prevState) => ({
        ...prevState,
        [`${validatingField}Error`]: false,
        [`${validatingField}Helper`]: "",
      }));
    } else {
      setSignUpValidation((prevState) => ({
        ...prevState,
        [`${validatingField}Error`]: true,
        [`${validatingField}Helper`]: `Enter Correct ${key}`,
      }));
    }
    return validTest;
  };

  const submit = async () => {
    let emailValid = await validateField("email", emailRegex, "email");
    let firstname = await validateField("firstname", regName, "firstname");
    let lastname = await validateField("lastname", regName, "lastname");
    let passwordValid = await validateField("password", passwordRegex, "pass");

    if (signUp.password !== signUp.confirmPassword) {
      setSignUpValidation((prevState) => ({
        ...prevState,
        confirmPassError: true,
        confirmPassHelper: "Confirm Password Must be same",
      }));
    } else {
      setSignUpValidation((prevState) => ({
        ...prevState,
        confirmPassError: false,
        confirmPassHelper: "",
      }));
    }
    if (emailValid && passwordValid && firstname && lastname) {
      let apiData = {
        email: signUp.email,
        password: signUp.password,
        firstname: signUp.firstname,
        lastname: signUp.lastname,
      };
      registerUser(apiData).then((res) => {
        alert("User Created");
        console.log("response", res);
      });
    }
    return;
  };

  return (
    <div>
      <div className="container4">
        <div className="form">
          <div className="box-container">
            <div className="bordered-box">
              <div className="heading">
                <img
                  src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
                  alt="google_img"
                />
              </div>
              <div className="title">Create your Google Account</div>
              <div className="sub-title">to continue to Gmail</div>
              <div className="name-input">
                <div className="custom-input">
                  <div className="text1">
                    <TextField
                      id="outlined-basic"
                      label="firstname"
                      variant="outlined"
                      error={signUpValidation.firstnameError}
                      helperText={signUpValidation.firstnameHelper}
                      onChange={(event) => updateValue(event, "firstname")}
                    />
                  </div>
                  <div className="text2">
                    <TextField
                      id="outlined-basic"
                      label="lastname"
                      variant="outlined"
                      error={signUpValidation.lastnameError}
                      helperText={signUpValidation.lastnameHelper}
                      onChange={(event) => updateValue(event, "lastname")}
                    />
                  </div>
                </div>
              </div>
              <div className="username">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  error={signUpValidation.emailError}
                  helperText={signUpValidation.emailHelper}
                  onChange={(event) => updateValue(event, "email")}
                />
                <span className="email-text">
                  You can use letters, numbers & periods
                </span>
              </div>
              <div className="password">
                <div className="password-input">
                  <div className="pass">
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      error={signUpValidation.passError}
                      helperText={signUpValidation.passHelper}
                      onChange={(event) => updateValue(event, "password")}
                    />
                  </div>
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    error={signUpValidation.confirmPassError}
                    helperText={signUpValidation.confirmPassHelper}
                    onChange={(event) => updateValue(event, "confirmPassword")}
                  />
                </div>
                <span className="password-text">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </span>
                <div className="show-password">
                  <Checkbox
                    value={showPassword}
                    onChange={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                  <span className="show-password">Show Password</span>
                </div>
              </div>
              <div className="bottom-container">
                <span className="create-account">
                  <span className="create-btn"></span>
                </span>
                <span className="next">
                  <button className="nxt-btn" onClick={submit}>
                    Next
                  </button>
                </span>
              </div>
            </div>
            <div className="signup-img">
              <div className="side-img">
                <img
                  src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                  alt="google_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
