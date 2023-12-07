import React from 'react'

function RepCard ({ representative }) {

  function handleGenerate() {
    console.log(representative)
  }

  return (
    <div>
      <h3 class="text-l mb-4 font-merriweather pl-6">{representative.name}</h3>
      <button onClick={handleGenerate}> Generate a letter </button>
    </div>
  )
}

export default RepCard