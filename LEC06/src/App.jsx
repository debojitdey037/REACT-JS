// import React from 'react'
// import { useState } from 'react'

// export default function MyInput(){
//   const [text,setText] = useState('hello');

//   let i = 0;

//   function handleChange(e){
//     setText(e.target.value);
//   }
  
//   return (
//     <>
//     <input value={text} onChange={handleChange}></input>
//     <p>{text}</p>
//     <p>{text}</p>
//     <p>{text}</p>
//     <p>{text}</p>
//     <p>{text}</p>
//     <p>{text}</p>
//     <p>{text}</p>
//     <p>{text}</p>
//     </>
//   )

// }


import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  );
}
