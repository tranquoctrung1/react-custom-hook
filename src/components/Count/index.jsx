import React from "react";
import useCount from "../../hooks/useCount";

function Count() {
  const [count, setCount] = useCount(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <div onClick={handleClick}>{count}</div>;
}

export default Count;
