import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={(event) =>
            setContact({
              fName: event.target.value,
              lName: contact.lName,
              email: contact.email
            })
          }
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={(event) =>
            setContact({
              fName: contact.fName,
              lName: event.target.value,
              email: contact.email
            })
          }
        />
        <input
          name="email"
          placeholder="Email"
          onChange={(event) =>
            setContact({
              fName: contact.fName,
              lName: contact.lName,
              email: event.target.value
            })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
