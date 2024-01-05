import React, {useContext} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { OfficialContext } from '../context/OfficialStore';
import RepLetter from './RepLetter';


function RepCard ({ representative }) {
  // const navigate = useNavigate();

  // const [official, setOfficial] = useContext(OfficialContext)

  // function handleGenerate() {
  //   console.log(representative);
  //   setOfficial(representative);
  //   // navigate("/repletter");
  // }

  function handleDownload() {
    console.log("download button")
  }

  return (
    <div class="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-merriweather">
        {representative.name}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-merriweather">
        {representative.photoUrl ? <img src={representative.photoUrl} alt="Official Portrait"/> : <></>}
        {representative.party}
      </p>
      <br></br>
      <RepLetter official={representative} />
      <br></br>
      <button 
        type="button"
        onClick={handleDownload}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded justify-center" data-te-ripple-init data-te-ripple-color="light"
      > Download Letter </button>
    </div>
  )
}

export default RepCard