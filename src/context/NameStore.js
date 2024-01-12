import React, { createContext, useState } from "react";

const NameContext = createContext(null);

const NameProvider = ({ children }) => {

  const [name, setName] = useState("");
  const value = [name, setName];

  return (
    <NameContext.Provider value={value}>
      { children }
    </NameContext.Provider>
  )
}

export { NameProvider, NameContext }