import React, { createContext, useState } from "react";

const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  // const [stores, setStores] = useState([])
  const [userSenators, setUserSenators] = useState([]);
  const [userRepresentative, setUserRepresentative] = useState([]);
  const [official, setOfficial] = useState({})
  const [name, setName] = useState("");
  const [address, setAddress] = useState({
      line1: "",
      city: "",
      state: "",
      zip: ""
  });

  const value = [userSenators, setUserSenators, userRepresentative, setUserRepresentative, official, setOfficial, name, setName, address, setAddress]

  return (
    <StoreContext.Provider value={value}>
      { children }
    </StoreContext.Provider>)
}

export { StoreProvider, StoreContext }