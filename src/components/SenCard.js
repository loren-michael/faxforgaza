import React from 'react'

function SenCard ({ senator }) {

  function handleGenerate() {
    console.log(senator)
  }

  return (
    <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 justify-center">
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-merriweather">
        {senator.name}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-merriweather">
        {senator.photoUrl ? <img src={senator.photoUrl} alt="Official Portrait"/> : <></>}
        {senator.party}
      </p>
      <button 
        type="button"
        onClick={handleGenerate}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded" data-te-ripple-init data-te-ripple-color="light"
      > Generate Letter </button>
    </div>
  )
}

export default SenCard