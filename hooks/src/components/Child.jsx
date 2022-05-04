import React from 'react'

export default  React.memo (function Child() {
  console.log("Child Render")
  return (

    
    <div>Child</div>
  )
})
