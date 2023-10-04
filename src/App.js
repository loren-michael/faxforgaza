import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {

  return (
    <BrowserRouter>
      <div id="background-color">
        <NavBar />
        <div className="app min-h-screen text-blue-200 flex items-center flex-col p-20">
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route path="/about" element={ <AboutMe /> } />
            <Route path="/projects" element={ <Projects /> }/>
            <Route path="/resume" element={ <Resume /> }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
