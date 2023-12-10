import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FindMyRep from "./components/FindMyRep";
import RepDisplay from "./components/RepDisplay";
import RepLetter from "./components/RepLetter";
import SenLetter from "./components/SenLetter";


// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
// import AboutMe from "./components/AboutMe";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  // const [userSenators, setUserSenators] = useState([]);
  // const [userRepresentative, setUserRepresentative] = useState([]);
  // const [official, setOfficial] = useState({})
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState({
  //     line1: "",
  //     city: "",
  //     state: "",
  //     zip: ""
  // });

  return (
    <BrowserRouter>
      <section className="body-font font-merriweather bg-blue-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <Home userSenators={userSenators} userRepresentative={userRepresentative} /> }/>
          <Route path="/findmyrep" element={ <FindMyRep name={name} setName={setName} address={address} setAddress={setAddress} setUserSenators={setUserSenators} setUserRepresentative={setUserRepresentative} userSenators={userSenators} userRepresentative={userRepresentative} /> } />
          <Route path="/representatives" element={ <RepDisplay userSenators={userSenators} userRepresentative={userRepresentative} /> }/>
          <Route path="/repletter" element={ <RepLetter name={name} address={address} official={official} /> }/>
          <Route path="/senletter" element={ <SenLetter /> }/>
        </Routes>
      </section>
    </BrowserRouter>
  );
}
