import "../App.css";
import React from 'react';
import Downloads from "./Downloads";
// import { StoreContext } from "../context/store";
// import AboutMe from './AboutMe';

function Home () {
  return (
    <div class="h-full flex-grow">
      <Downloads />
    </div>
  )
}

export default Home