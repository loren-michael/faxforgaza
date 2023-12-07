import React from 'react'

function RepCard ({ representative }) {

  function handleGenerate() {
    console.log(representative)
  }

  return (
    <div class="grid-cols-2">
      <div class="flex justify-left">
        <h3 class="text-l mb-4 font-merriweather pl-6">{representative.name}</h3>
      </div>
      <div class="flex justify-right">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded" onClick={handleGenerate}> Generate a letter </button>
      </div>
    </div>
  )
}

export default RepCard