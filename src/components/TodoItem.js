import { useState } from "react";

function TodoItem(props) {
  const [isClicked, setClick] = useState(false);

  function listItemClick() {
    setClick((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      style={{ textDecoration: isClicked ? "line-through" : "none" }}
      onClick={listItemClick}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
