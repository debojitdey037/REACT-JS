import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

function App() {
  
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    async function getData(){
      console.log("......loading");
      let response = await fetch("https://testing-2po4.onrender.com/api/products");
      let data = await response.json();
      setProducts(data);
      console.log(products);
    }
    getData();
  },[])

  return (
    <div>
      <ProductList products={products} ></ProductList>
    </div>
  )
}

export default App