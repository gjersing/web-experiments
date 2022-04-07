import React from "react";

function List(props) {
  return (
    <div>
      <ul>
        {props.items.map((name, index) => {
          return (
            <li
              onClick={() => {
                props.onChecked(index);
              }}
              key={index}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
