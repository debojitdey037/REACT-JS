import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

function App() {
  
  // const [count,setCount] = useState(0);
  const [products,setProducts] = useState([]);

  // useEffect(()=>{
  //   console.log("Debojit");
  // })

  // useEffect(()=>{
  //   console.log("Debanjan");
  // },[count])

  // useEffect(()=>{
  //   console.log("Sudipto");
  // },[])
  useEffect(()=>{
    async function getData(){
      console.log("......loading");
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);
      console.log(products);
    }
    getData();
  },[])

  return (
    <div>
      {/* <h1>Lorem ipsum dolor sit amet consectetur.</h1>
      <h3>My number is {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button> */}

      <ProductList products={products} ></ProductList>
    </div>
  )
}

export default App