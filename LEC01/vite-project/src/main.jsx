// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from "react";
      import ReactDOM from "React-dom/client"

      const root = ReactDOM.createRoot(document.getElementById('root'))
      const heading = React.createElement('h3',{},'react is starting 🫡');
      root.render(heading);
