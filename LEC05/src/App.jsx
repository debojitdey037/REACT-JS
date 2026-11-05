import React, { useState } from 'react'
import Foods from './Foods'

function App() {

  const [cartCount, setcartCount] = useState(0);

  function addtocart() {
    setcartCount(cartCount => cartCount + 1);
  }

  return (
    <div>
      <h1>{cartCount}</h1>
      {
        Foods.map((Element) => {
          return (
            <div key={Element.id} style={{ backgroundColor: 'pink', color: 'red' }}>
              <p>{Element.name}</p>
              <p>{Element.category}</p>
              <p>{Element.price}</p>
              <p style={{color:'Black'}}>{Element.available ? "Available" : "Out of Stock"}</p>
              <p>{Element.emoji}</p>

              <button style={{ backgroundColor: Element.available ? 'green' : 'gray', color: 'white' }} 
                               disabled={!Element.available} 
                               onClick={addtocart}
                               >
                               Add to cart</button>
            </div>
          );
        })
      }
    </div>
  )
}

export default App