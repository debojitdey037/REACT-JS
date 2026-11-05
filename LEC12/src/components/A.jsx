// import React from 'react'
// import B from './B'
// function A({data}) {
//     // const {name,age} = data
//   return (
//     <div>
//         <B data={data}></B>
//     </div>
//   )
// }

// export default A
import React, { createContext } from 'react'

export const angrydevesh = createContext();

function A() {
    const mood = "angry";
    const lunch = "no lunch due to vikas sir"

  return (
    <angrydevesh.Provider value={{lunch,mood}} >
        <div>
           
        </div>
    </angrydevesh.Provider>
  )
}

export default A