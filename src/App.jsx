import { Children, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {FiSearch} from 'react-icons/fi'
import { FaCirclePlus } from "react-icons/fa6";
import { SnapshotMetadata, collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";


import ContactCard from './components/ContactCard'
import Modal from "./components/Modal";
import AddandUpdate from "./components/AddandUpdate";
import useDisclouse from "./Hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact'
function App() {

  const [contacts,setContact]=useState([]);

  const {isOpen,onClose,onOpen}=useDisclouse();

  useEffect(()=>{
    const getContacts= async()=>{
      try{
        const contactsRef=collection(db,"Contacts");
        
        onSnapshot(contactsRef,(snapshot)=>{
         const contactLists= snapshot.docs.map((doc)=>{
            return {
              id: doc.id,
              ...doc.data()}});
              setContact(contactLists);
              return contactLists
        })
        
       
       
    }
      catch (error){
        console.log(error);
      }
    }

    getContacts()
  },[])

  const filterContact=(e)=>{
    const value=e.target.value;

    const contactsRef=collection(db,"Contacts");
        
    onSnapshot(contactsRef,(snapshot)=>{
     const contactLists= snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()}});

          const filteredContact=contactLists.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()))

          setContact(filteredContact);
          return filteredContact
    })

  }

  return (
    <>
      <div className="max-w-[370px] m-auto px-4">
        <Navbar/>

        <div className=" relative flex items-center">
            <FiSearch className="text-white absolute text-2xl ml-1" />
            <input onChange={filterContact} type="serach" className="flex-grow bg-transparent border border-white rounded-md outline-1 h-10 text-white pl-9" />
            <div className="ml-2">
            <FaCirclePlus onClick={onOpen} className="text-white text-5xl cursor-pointer" />
            </div>
            
        </div>

        <div className="flex flex-col mt-4 gap-3">
          { contacts.length <=0 ? <NotFoundContact/> :
            contacts.map((contact)=>(
              <ContactCard key={contact.id} contact={contact}/>
            ))}
        </div>
      </div>
      <AddandUpdate isOpen={isOpen} onClose={onClose}/>
      <ToastContainer
        position="bottom-center"
      />
    </>
  );
}

export default App;
