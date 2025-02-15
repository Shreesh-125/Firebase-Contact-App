import React from 'react'
import Modal from './Modal'
import { Formik,Field,Form, ErrorMessage } from 'formik'
import { addDoc, collection, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const contactSchemaValidation=Yup.object().shape({
    name:Yup.string().required("Name is Required"),
    email:Yup.string().required("Invalid Email")
})


function AddandUpdate({isOpen,onClose,isUpdate,contact}) {

    const addContact= async(contact)=>{
        try{

            const contactRef=collection(db,"Contacts")
            await addDoc(contactRef,contact)
            
            onClose()
            toast.success("Contact Added Succesfully")
        }catch(error){
            console.log(error);
        }
    }

    const updateContact= async(contact,id)=>{
        try{

            const contactRef=doc(db,"Contacts",id)
            await updateDoc(contactRef,contact)
            onClose()
            toast.success("Contact Updated Succesfully")
        }catch(error){
            console.log(error);
        }
    }



  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
            <Formik
            validationSchema={contactSchemaValidation}
            initialValues={ isUpdate ? {
                name:contact.name,
                email:contact.email,
            }:{
                name:"",
                email:"",
            }}
            onSubmit={(values)=>{
                console.log(values);
                isUpdate ? updateContact(values,contact.id): addContact(values)
            }}
            >
                <Form action="">
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <Field className='border h-10' name="name"></Field>
                    </div>
                    <div className='text-red-700 text-xs'>
                        <ErrorMessage name="name"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <Field type="email"  className='border h-10' name="email"></Field>
                    </div>
                    <div className='text-red-700 text-xs'>
                        <ErrorMessage name="email"/>
                    </div>

                   <div className='flex justify-end'><button className='bg-darkYellow px-3 py-1.5 rounded-md mt-2 border '>{isUpdate ? "update":"add"} Contact</button></div> 
                </Form>
            </Formik>
        </Modal>
    </div>
  )
}

export default AddandUpdate