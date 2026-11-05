// import React from 'react';
// import Users from './Users';
// import Card from './Card'

// console.log(Users);

// function Mybutton() {
//   return (
//     <h1>My button</h1>
//   )
// }
// const newStudents = Users.filter((element) => element.age >= 20);

// const App = () => {

//   return (
//     <>
//       {/* <div>
//       <h1>Hello World</h1>
//       <Card></Card>
//       <Mybutton></Mybutton> 
//      </div> */}
     
//       {
//       newStudents.map((element) => {
//             return (
//                 <div key={element.id} style={{ backgroundColor: "pink" }}>
//                     <h2>{element.id}</h2>
//                     <h2>{element.name}</h2>
//                     <h2>{element.age}</h2>
//                     <h2>{element.course}</h2>
//                     <h2>{element.year}</h2>
//                     <h2>{element.cgpa}</h2>
//                 </div>
//             )
//        })
//      }
//     </>
//   )

// }
// export default App


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// import React from 'react'
// import AdminPanel from './AdminPanel'
// import LoginForm from './LoginForm'

// function App() {
//   let content;
//   const isLoggedIn = true;
//   if(isLoggedIn) {
//     content = <AdminPanel></AdminPanel>
//   }
//   else{
//     content = <LoginForm></LoginForm>
//   }
//   return (
//     <div>
//       {content}
//       <h1>Debojit Dey</h1>
//     </div>
//   )
// }

// export default App


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


import React from 'react'
import Card from './Card'



function App() {
  let age = 69;

  return (
    <div>
      <h1>My age is {age}.</h1>
      <Card myage={age} fname="Debojit"></Card>
    </div>
  )
}

export default App