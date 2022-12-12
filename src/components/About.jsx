import { useRef } from "react";

export default () => {
  const inputRef = useRef();

  const onClear = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onClear}>Clear</button>
    </div>
  );
};
