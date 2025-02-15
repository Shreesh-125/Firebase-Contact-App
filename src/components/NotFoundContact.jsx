import React from 'react'

function notFoundContact() {
  return (
    <div className='items-center flex gap-4 h-[60vh] justify-center'>
        <img src="/Contact.png" alt="" />
        <h3 className='text-white text-2xl font-semibold'>Not Found</h3>
    </div>
  )
}

export default notFoundContact