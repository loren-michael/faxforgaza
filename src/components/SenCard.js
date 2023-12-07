import React from 'react'

function SenCard ({ senator }) {

  function handleGenerate() {
    console.log(senator)
  }

  return (
    <div>
      <h3 class="text-l mb-4 font-merriweather pl-6">{senator.name}</h3>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded" onClick={handleGenerate}> Generate a letter </button>
    </div>
  )
}

export default SenCard