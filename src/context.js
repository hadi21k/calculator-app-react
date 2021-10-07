import { createContext, useContext, useState } from "react";

const InputValue = createContext();

export function useAuth() {
  return useContext(InputValue);
}

export function InputContext({ children }) {
  const [text, setText] = useState("");
  return <InputValue.Provider value={{ text,setText }}>{children}</InputValue.Provider>;
}
