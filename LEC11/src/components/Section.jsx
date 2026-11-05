import React from 'react'

function Section({ data }) {
    console.log(data)
    return (
        <div className='bg-pink-500 flex flex-wrap justify-center h-40 text-1xl gap-5 text-center item p-5'>
        {
            data.map((element)=>{
                 return(
                    <div className='bg-yellow-200 h-30 w-30 justify-center text-center rounded-xl items-center p-4'>
                        <h1>{element.year}</h1>
                        <h2>{element.batch}</h2>
                        <h2>{element.level}</h2>
                    </div>
                 )
            })
        }
        </div>
    )
}

export default Section