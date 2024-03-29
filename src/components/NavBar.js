import "../App.css";
import React from 'react';


function NavBar () {
  return (
    <div class="flex items-center justify-between flex-wrap bg-green-900 p-6 sticky top-0 text-white">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
        <span>
          <a href="/" class="font-merriweather text-xl tracking-tight"> Fax For Gaza </a>
        </span>
      </div>
        <span>
          <a href="/links" class="font-merriweather text-l tracking-tight"> Links </a>
        </span>
      {/* <div class="block lg:hidden"> */}
        {/* <button class="flex items-center px-3 py-2 border rounded text-blue-200 bg-blue-600 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3 font-merriweather" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">Menu<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button> */}
      {/* </div> */}
      {/* <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> */}
        {/* <div class="text-sm lg:flex-grow"> */}
          {/* <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4 font-merriweather">Home</a> */}
          {/* <a href="https://faxzero.com/fax_congress.php" target="_blank" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4 font-merriweather p-4"> FaxZero </a> */}
          {/* <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white font-merriweather p-4"> House.gov Rep Search </a> */}
          {/* <a href="/links" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white font-merriweather p-4"> Other Links </a> */}
        {/* </div> */}
        {/* <div>
          <a href={require("../resources/file.pdf")} download="myFile" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0 font-merriweather">Resume</a>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default NavBar

