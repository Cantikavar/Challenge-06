import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import background from "../../Components/IMG/image 2.png";
import Logologin from "../../Components/IMG/Rectangle 62.png";
import { auth } from "../../firebase";
import "../Login/Login.css";

const PindahSignUp = () => {
  window.location.href = "/SignUp";
};

const contBerhasil = () => {
  window.location.href = "/homepage";
};

export const Login = () => {
  const handleadmin = () => {
    signInWithPopup(auth)
      .then((data) => {
        if (data) {
          signUpToApi(data);
        }
      })
      .catch((error) => {
        console.log(error, "ini admin error");
      });
  };

  const signUpToApi = (data) => {
    var axios = require("axios");
    var data = JSON.stringify({
      email: "admin@mail.com",
      password: "123456",
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/admin/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data, "ini admin berhasil"));
      })
      .catch(function (error) {
        console.log(error, "ini admin");
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
          <img src={Logologin} onClick={contBerhasil} />
          <h3>
            <strong>Welcome Back!</strong>
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
          <button className="button-sign" onClick={handleadmin}>
            Sign In
          </button>
          <br />
          <div className="Account-Sign">
            <p className="Account">Don't have an account?</p>
            <a
              href="/SignUp"
              className="SignUp"
              onClick={() => {
                PindahSignUp();
              }}
            >
              Sign Up for free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
