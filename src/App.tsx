// import React, { useState } from "react";
import "./App.css";
// import { BookList } from "./components";
import { UseReducerHook } from "./hooks";
// import Login from "./components/Login";
// import { Button, Container, Input } from "./components/";
// import LoginTwo from "./components/LoginTwo";

const App = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log({ username, password });
  //   setUsername("");
  //   setPassword("");
  // };

  return (
    <div>
      <UseReducerHook />
    </div>
  );
};

export default App;
