import React from "react";
import { TextInput, Button } from "../components/";
import { Link } from "react-router-dom";
import { useState } from "react";
import authenticate from "../utils/authenticate";
import { AuthContext } from "../app";

export default function Login() {
  const { dispatch } = React.useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmiting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleFormSubmit (username, password)  {
    // event.preventDefault();
    setIsSubmiting(true);
    setErrorMessage(null);

    const res = await authenticate(username, password);
    console.log(res);
    if (res) {
      if (res.message) {
        setIsSubmiting(false);
        setErrorMessage(res.message);
      } else {
        dispatch({
          type: "LOGIN",
          payload: res
        })
      }
    }
    // if (res) {
    //   if (res.ok) {
    //     // const resJson = res.json();
    //     console.log(res);
    //     console.log(res.value);
    //     console.log(res.name);
    //     console.log(res.username);
    //     dispatch({
    //       type: "LOGIN",
    //       payload: res,
    //     });
    //   }
    // }
    // .then((res) => {
    //   console.log("im herer1!!");
    //   if (res.ok) {
    //     return res.json();
    //   }
    //   throw res;
    // })
    // .then((resJson) => {
    //   dispatch({
    //     type: "LOGIN",
    //     payload: resJson,
    //   });
    // })
    // .catch((error) => {
    //   setIsSubmiting(false);
    //   setErrorMessage(error.message || error.statusText);
    // });
  };
  return (
    <div className="box-container">
      <h1>Log In</h1>
      <div className="box">
        <TextInput
          heading="username"
          type="text"
          value={username}
          setValue={setUsername}
        />
        <TextInput
          heading="password"
          type="password"
          value={password}
          setValue={setPassword}
        />

        <div className="foot-box">
          <h5>
            <Link to="/signup"> Click here to sign up</Link>
          </h5>
          <Button
            name="Login"
            type="mybutton-primary-1"
            onClick={() => handleFormSubmit(username, password)}
            // onClick={() => {
            //   handleFormSubmit
            //   handleAuthentication(username, password);
            // }}
          />
        </div>
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}

async function handleAuthentication(username, password) {
  const res = await authenticate(username, password);
  console.log(typeof res);
  console.log(res);
  if (res.message) {
    alert("Incorrect username or password");
  } else if (res.username === username) {
    alert("Sucess!");

    // st global token
    // and redirect ot home page
  }
}
