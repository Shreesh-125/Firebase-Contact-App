import React from 'react'

function Navbar() {
  return (
    <div className='h-[13vh] bg-white m-4 rounded-lg flex justify-center items-center my-4 '>
          <div className='flex justify-center items-center gap-2 text-xl  font-medium'>
            <img src="/logos_firebase.svg" alt="" />
            <h1>Firebase Contact App</h1>
        </div>
    </div>
  
  )
}

export default Navbar