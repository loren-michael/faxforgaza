import React, { createContext, useState } from "react";

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {

  const [address, setAddress] = useState({
      line1: "",
      city: "",
      state: "",
      zip: ""
  });
  const value = [address, setAddress];

  return (

    <AddressContext.Provider value={value}>
      { children }
    </AddressContext.Provider>
  )
}

export { AddressProvider, AddressContext }