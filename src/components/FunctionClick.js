import React from 'react'

function FunctionClick() {
    function jee(a) {
        console.log('You have clicked me' + a);
    }
  return (
    <div>
        <button onClick={function() {jee(5)}}>Click Me!</button>
    </div>
  )
}

export default FunctionClick
