import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* // Link path change le liye */}
        <Link to='/'>Home</Link> {"  "}
        <Link to='/about'>About</Link> {"  "}
        <Link to='/service'>Service</Link> {"  "}
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App