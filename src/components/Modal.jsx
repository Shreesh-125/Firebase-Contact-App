import React from 'react'
import { createPortal } from 'react-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";

function Modal({onClose,isOpen,children}) {
  return createPortal (
    <>
    { isOpen &&( <div className=' grid place-items-center absolute top-0 z-40 backdrop-blur h-screen w-screen'>
      <div className=' m-auto relative z-50 min-h-[200px] min-w-[80%] bg-white p-4'>
        <div className='flex justify-end'>
        <IoMdCloseCircleOutline onClick={onClose} className='text-2xl'  />
        </div>
        {children}
      </div>
      
    
    </div>)
    }
    </>
  ,document.getElementById("modal-root"))
}

export default Modal