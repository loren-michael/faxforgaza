import { Link } from "react-router-dom";
import "../App.css";
import React from 'react'

const Resume = () => {
  return (
    <div class="h-full bg-hartmanblue-200">
      <div>Resume</div>
      <Link to="../resources/LorenHartmanResume.pdf" target="_blank" download> Download </Link>
    </div>
  )
}

export default Resume