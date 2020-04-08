import { withRouter } from "react-router-dom";
import React, { Component } from "react";

function Home(props) {
  return (
    <div style={{ paddingTop: "30px" }}>
      <center>
        <b>
          <h3> Assignment 4</h3>
        </b>
        <h1>Hemrajsinh Varachhia</h1>
        <h1>Sohel Gangat</h1>
      </center>
    </div>
  );
}

export default withRouter(Home);
