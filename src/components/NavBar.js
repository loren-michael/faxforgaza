import "../App.css";
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class="h-20 bg-blue-400">
      <div class="w-full">
        <a href="/"><span class="font-merriweather text-2xl h-30 float-left pl-2"> Loren Hartman </span></a>
        <span class="float-right">
          <NavLink to="/about" href="/about" class="font-sans text-lg text-white"> About Me </NavLink>
          <NavLink to="/resume" href="/resume" class="font-sans text-lg text-white"> Resume </NavLink>
        </span>
      </div>
    </div>
  )
}

export default NavBar