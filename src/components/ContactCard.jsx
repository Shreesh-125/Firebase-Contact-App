import { deleteDoc } from 'firebase/firestore';
import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from '../config/firebase';
import { doc } from "firebase/firestore";
import AddandUpdate from './AddandUpdate';
import useDisclouse from '../Hooks/useDisclouse';
import { toast } from 'react-toastify';

function ContactCard({key,contact}) {

    const {isOpen,onClose,onOpen}=useDisclouse();

    const deletecontact = async(id)=>{
        try{

            await deleteDoc(doc(db,"Contacts",id))
            toast.success("Contact Deleted Succesfully")
        }catch(error){
            console.log(error);
        }
    }
    

  return (
    <>
    <div className='flex bg-yellow items-center justify-between p-2 rounded-lg' key={contact.id}>
              <div className="flex items-center gap-2">
                <HiOutlineUserCircle className="text-orange text-4xl"/>
                <div className="flex flex-col ">
                  <h2 className="font-medium">{contact.name}</h2>
                  <p className="text-sm">{contact.email}</p>
                </div>
              </div>
              <div className="flex gap-2">
              <RiEditCircleLine onClick={onOpen} className="text-3xl cursor-pointer" />
              <IoMdTrash onClick={()=>deletecontact(contact.id)} className="text-3xl cursor-pointer" />
              </div>
            </div>
            <AddandUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
            </>
            
  )
}

export default ContactCard
