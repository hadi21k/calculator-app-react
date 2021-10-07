import { useEffect, useRef } from "react";
import { useAuth } from "./context";

const Com = () => {
  const { text, setText } = useAuth();
  const inputRef = useRef(0);
  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    inputRef.current += 1;
  }, [text]);
  return (
    <div>
      <form>
        <input type="text" value={text} onChange={onChange} />
        <br />
        {text}
        <br />
        {inputRef.current}
      </form>
    </div>
  );
};

export default Com;
