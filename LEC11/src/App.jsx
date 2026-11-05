import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import { DiApple } from "react-icons/di";


function App() {
  const arr = [
    {
      batch: "Beta",
      level: "god level",
      year: 2
    },
    {
      batch: "Beta",
      level: "noob god level",
      year: 1
    }
  ]
  return (
    <div>
      {/* <DiApple /> */}

      <Navbar></Navbar>

      {/* <Section data={arr}></Section> */}


    </div>
    // <div className='bg-pink-300 text-9xl text-center h-50 font-bold text-red-500'>Debojit</div>
  )
}

export default App