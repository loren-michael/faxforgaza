import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FindMyRep from "./components/FindMyRep";
import RepDisplay from "./components/RepDisplay";

// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
// import AboutMe from "./components/AboutMe";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {

  return (
    <BrowserRouter>
      <section className="body-font font-merriweather bg-blue-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route path="/findmyrep" element={ <FindMyRep /> } />
          <Route path="/representatives" element={ <RepDisplay /> }/>
          {/* <Route path="/resume" element={ <Resume /> }/> */}
        </Routes>
      </section>
    </BrowserRouter>
  );
}
