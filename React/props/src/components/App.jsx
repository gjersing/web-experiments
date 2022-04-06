import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" />
      {contacts.map((contact) => (
        <Card {...contact} />
      ))}
    </div>
  );
}

export default App;
