import React from 'react' 
import "./App.css"
import Block from './Block'

function App() {
  return (
   <>
    {/* <style>
      {`
        h1{
         color: red;
         background: black;
        }
      `}
    </style> */}
    <div>
      {/* <h2 style={{color:'red',backgroundColor:'aqua'}}>Thia is functional component</h2> */}
      {/* <h1>Lorem ipsum dolor sit.</h1> */}
      <h2>External css adding...</h2>
      <Block></Block>
    </div>
   </>
  )
}

export default App