import React from 'react'

function RepCard ({ representative }) {

  function handleGenerate() {
    console.log(representative)
  }

  return (
    // <div class="grid-cols-2">
    //   <div class="flex justify-left">
    //     <h3 class="text-l mb-4 font-merriweather pl-6">{representative.name}</h3>
    //   </div>
    //   <div class="flex justify-right">
    //     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded" onClick={handleGenerate}> Generate a letter </button>
    //   </div>
    // </div>

    <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {representative.name}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        <img src={representative.photoUrl} alt="Official Portrait"/>
        {representative.party}
      </p>
      <button type="button" onClick={handleGenerate} class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
        Button
      </button>
    </div>


  )
}

export default RepCard