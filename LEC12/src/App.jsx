import React, { createContext } from 'react'
import Navbar from './Navbar'
import A from './components/A'
import D from './components/D'

export const info = createContext();

function App() {
  const name = "debojit"
  const age = 21;


  const college = "Mirai";
  const city = "Ghaziabad";

  const sad = ""

  return (
    // <info.Provider value={{college,city}}>
    //   <div>
    //       {/* <A data={{name,age}}></A> */}
    //       <A></A>
    //   </div>
    // </info.Provider>
    <A></A>
    
  )
}

export default App