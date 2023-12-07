import React from 'react'

function SenCard ({ senator }) {
  console.log(senator)
  return (
    <div>
      <h3 class="text-l mb-4 font-merriweather pl-6">{senator.name}</h3>
    </div>
  )
}

export default SenCard