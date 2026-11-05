// import React from 'react'
// import D from './D'

// function C({data}) {
//   return (
//     <div>
//         C component
//         <D data={data}></D>
//     </div>
//   )
// }

// export default C
import React from 'react'
import { angrydevesh } from './A'
import { useContext } from 'react'

function C() {
    const {lunch,mood} = useContext(angrydevesh)
  return (
    <div>
        <h1>{lunch}</h1>
    </div>
  )
}

export default C