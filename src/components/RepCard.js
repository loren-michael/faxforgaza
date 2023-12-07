import React from 'react'

function RepCard ({ representative }) {
  return (
    <div>
      <h3 class="text-l font-bold mb-4 font-merriweather">{representative.name}</h3>
    </div>
  )
}

export default RepCard