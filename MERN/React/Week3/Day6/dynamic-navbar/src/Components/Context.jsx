import React, { createContext, useContext, useState } from "react";

const NameContext = createContext();
export const useNameContext = () => useContext(NameContext);
export const NameProvider = ({ children }) => {
  const [Name, setName] = useState("Guest");

  return (
    <NameContext.Provider value={{ Name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
