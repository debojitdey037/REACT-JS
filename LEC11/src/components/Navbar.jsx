// import React from 'react'

// function Navbar() {
//   return (
//     <div>
//         <ul className='text-1xl flex gap-9 text-center justify-center text-blue-600'>
//             <li>Home</li>
//             <li>About</li>
//             <li>Service</li>
//             <li>Help</li>
//         </ul>
//     </div>
//   )
// }

// export default Navbar
function Navbar() {
  return (
    <div className="p-4">
      <div className="flex gap-3 items-center">
        <button className="bg-yellow-300 rounded-xl h-12 w-25">Flipkart</button>
        <button className="bg-gray-100 rounded-xl">Minutes</button>
        <button className="bg-gray-100 rounded-xl">Travel</button>
        <button className="bg-gray-100 rounded-xl">Grocery</button>
      </div>
      <div className="flex gap-6 mt-4 items-center">
        <input className="border-2 border-blue-400 rounded-xl p-3 w-96" placeholder="Search for Products, Brands and More" />
      </div>
    </div>
  );
}

export default Navbar;