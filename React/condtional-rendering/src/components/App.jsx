import React from "react";
import Form from "./Form";

//Change between true and false to see dynamics
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
