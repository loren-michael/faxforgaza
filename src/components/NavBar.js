import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class="h-40">
      <div class="w-full">
        <span class="float-left">Loren Hartman</span>
        <span class="float-right">
          <NavLink to="/about" href="/about" class="font-sans text-lg text-white"></NavLink>
          <NavLink to="/resume" href="/resume" class="font-sans text-lg text-white"></NavLink>
        </span>
      </div>
    </div>
  )
}

export default NavBar