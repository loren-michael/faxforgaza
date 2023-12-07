import React from 'react'

function SenCard ({ senator }) {

  function handleGenerate() {
    console.log(senator)
  }

  return (
    <div>
      <h3 class="text-l mb-4 font-merriweather pl-6">{senator.name}</h3>
      <button onClick={handleGenerate}> Generate a letter </button>
    </div>
  )
}

export default SenCard