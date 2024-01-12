import React, { createContext, useState } from "react";

const OfficialContext = createContext(null);

const OfficialProvider = ({ children }) => {

  const [official, setOfficial] = useState({})
  const value = [official, setOfficial];

  return (
    <OfficialContext.Provider value={value}>
      { children }
    </OfficialContext.Provider>
  )
}

export { OfficialProvider, OfficialContext }