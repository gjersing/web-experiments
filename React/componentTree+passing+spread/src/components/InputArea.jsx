import React from "react";

function InputArea(props) {
  const [item, setItem] = React.useState("");

  return (
    <div className="form">
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          props.onAdd(item);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
