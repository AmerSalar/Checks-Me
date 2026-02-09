import { useState } from "react";
import Context from "./Context";

function AppProvider({ children }) {
  const [isAdding, setIsAdding] = useState(false);
  const context = {
    get: isAdding,
    set: setIsAdding,
  };
  return (
    <>
      <Context.Provider value={context}>{children}</Context.Provider>
    </>
  );
}

export default AppProvider;
