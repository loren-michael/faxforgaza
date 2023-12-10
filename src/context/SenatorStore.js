import React, { createContext, useState } from "react";

const SenatorContext = createContext(null);

const SenatorProvider = ({ children }) => {
  // const [stores, setStores] = useState([])
  const [userSenators, setUserSenators] = useState([]);
  // const [userRepresentative, setUserRepresentative] = useState([]);
  // const [official, setOfficial] = useState({})
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState({
  //     line1: "",
  //     city: "",
  //     state: "",
  //     zip: ""
  // });

  const value = [userSenators, setUserSenators];
  // const value = [userSenators, setUserSenators, userRepresentative, setUserRepresentative, official, setOfficial, name, setName, address, setAddress]
  // const userSenatorState = [userSenators, setUserSenators]
  // const userRepresentativeState = [userRepresentative, setUserRepresentative]
  // const requestedOfficial = [official, setOfficial]
  // const userName = [name, setName]
  // const userAddress = [address, setAddress]

  return (
    // <StoreContext.Provider value={{
    //   userSenatorState: [userSenators, setUserSenators], 
    //   userRepresentativeState: [userRepresentative, setUserRepresentative],
    //   requestedOfficial: [official, setOfficial],
    //   userName: [name, setName],
    //   userAddress: [address, setAddress]
    // }}>
    <SenatorContext.Provider value={value}>
      { children }
    </SenatorContext.Provider>)
}

export { SenatorProvider, SenatorContext }