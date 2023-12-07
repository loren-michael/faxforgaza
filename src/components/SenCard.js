import React from 'react'

function SenCard ({ senator, handleGenerate }) {

  return (
    <div>
      <h3 class="text-l mb-4 font-merriweather pl-6">{senator.name}</h3>
      <button onClick={handleGenerate(senator)}> Generate a letter </button>
    </div>
  )
}

export default SenCard