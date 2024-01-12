import React, { createContext, useState } from "react";

const SenatorContext = createContext(null);

const SenatorProvider = ({ children }) => {

  const [userSenators, setUserSenators] = useState([]);
  const value = [userSenators, setUserSenators];

  return (
    <SenatorContext.Provider value={value}>
      { children }
    </SenatorContext.Provider>
  )
}

export { SenatorProvider, SenatorContext }