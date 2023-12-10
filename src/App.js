import React, { useState, useContext } from "react";
import { StoreContext } from "./context/store";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FindMyRep from "./components/FindMyRep";
import RepDisplay from "./components/RepDisplay";
import RepLetter from "./components/RepLetter";
import SenLetter from "./components/SenLetter";

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
          <Route exact path="/" element={ <Home /> }/>
          <Route path="/findmyrep" element={ <FindMyRep /> } />
          <Route path="/representatives" element={ <RepDisplay /> }/>
          <Route path="/repletter" element={ <RepLetter /> }/>
          <Route path="/senletter" element={ <SenLetter /> }/>
        </Routes>
      </section>
    </BrowserRouter>
  );
}
