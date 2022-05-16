import React from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import background from "../../Components/IMG/image 2.png";
import Logologin from "../../Components/IMG/Rectangle 62.png";
import "../Login02/Login02.css";
import { auth } from "../../firebase";

export const Login02 = () => {
  const authDefault = auth;
  const provider = new GoogleAuthProvider();
  const handlegoogle = () => {
    signInWithPopup(authDefault, provider)
      .then((data) => {
        if (data) {
          console.log((window.location.href = "/HomepageUser"));
        }
      })
      .catch((error) => {
        console.log(error, "ini adalah error");
      });
  };

  const signUpUser = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      email: data.email,
      password: data.uid,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/customer/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log((response.data, "ini user berhasil"));
      })
      .catch(function (error) {
        console.log(error, "ini user error");
      });
  };

  return (
    <div>
      <img
        className="Pict-car"
        src={background}
        style={{ width: 720, height: 589 }}
      />

      <div className="container-login">
        <div className="container-startlogin">
          <img src={Logologin} />
          <h3>
            <strong>Create New Account</strong>
          </h3>
          <div className="from-email">
            <label>Email</label>
            <input
              type="email"
              className="control-email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </div>
          <div className="form-password">
            <label>Password</label>
            <input
              type="password"
              className="control-password"
              placeholder="6+ karakter"
            />
          </div>
          <br />
          <br />
          <br />
          <button className="button-sign">Sign Up</button>
          <br />
          <h6 className="or-google">
            {" "}
            <strong>OR</strong>
          </h6>
          <div className="button-google">
            <GoogleButton onClick={handlegoogle} />
          </div>
          <div className="Account-Sign">
            <p className="Account">Already have an account?</p>
            <a href="/" className="SignUp">
              Sign In here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
