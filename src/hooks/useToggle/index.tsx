import { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

export { useToggle };
