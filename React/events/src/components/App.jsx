import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("");
  const [name, setName] = React.useState("");
  const [isMousedOver, setMouseOver] = React.useState(false);

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        id="nameInput"
        type="text"
        placeholder="What's your name?"
        onChange={(event) => setName(event.target.value)}
      />
      <button
        type="submit"
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        onClick={() => setHeadingText(name)}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
