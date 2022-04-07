import React from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = React.useState(["Click items to delete!"]);

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addItem(itemText) {
    setItems((prevItems) => {
      return [...prevItems, itemText];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <List items={items} onChecked={deleteItem} />
    </div>
  );
}

export default App;
