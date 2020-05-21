import { useState } from "react";

function useCount(initialState) {
  const [count, setCount] = useState(initialState);

  return [count, setCount];
}

export default useCount;
