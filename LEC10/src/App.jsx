import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
       <nav>
          <Link to='/'>Home</Link> {" "}
          <Link to='/about'>About</Link>
       </nav>

       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App