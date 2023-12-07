import React from 'react'

function SenCard ({ senator }) {
  console.log(senator)
  return (
    <div>
      <h3 class="text-l font-bold mb-4 font-merriweather">{senator.name}</h3>
    </div>
  )
}

export default SenCard