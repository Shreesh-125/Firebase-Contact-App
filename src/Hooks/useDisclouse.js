import React from 'react'
import { useState } from 'react';

function useDisclouse() {

    const [isOpen,setOpen]=useState(false);

    const onOpen=()=>{
      setOpen(true);
    }
    const onClose=()=>{
      setOpen(false)
    }
  return ({isOpen,onClose,onOpen})
}

export default useDisclouse