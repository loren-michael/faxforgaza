import React from 'react'

function RepCard ({ representative }) {
  return (
    <div>
      <h3 class="text-l mb-4 font-merriweather pl-6">{representative.name}</h3>
    </div>
  )
}

export default RepCard