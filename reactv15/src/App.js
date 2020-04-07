import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome";
import Clock from "./components/clock";
import ActionLink from "./components/clik";
import PostArticle from "./components/api";

function App() {
  return (
    <div className="App">
      {/* <Welcome name="riska" />
      <Welcome name="tri" /> */}
      <PostArticle />
    </div>
  );
}

export default App;
