import React, { createContext, useState } from "react";

const RepresentativeContext = createContext(null);

const RepresentativeProvider = ({ children }) => {

  const [userRepresentative, setUserRepresentative] = useState([]);
  const value = [userRepresentative, setUserRepresentative];

  return (
    <RepresentativeContext.Provider value={value}>
      { children }
    </RepresentativeContext.Provider>
  )
}

export { RepresentativeProvider, RepresentativeContext }