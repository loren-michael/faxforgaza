import "../App.css";
import React from 'react';
import Downloads from "./Downloads";
// import AboutMe from './AboutMe';

function Home ({userSenators, userRepresentative}) {
  return (
    <div class="h-full flex-grow">
      <Downloads userSenators={userSenators} userRepresentative={userRepresentative} />
    </div>
  )
}

export default Home