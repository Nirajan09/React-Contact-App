import React from 'react'
import Model from './Model'
import {Formik, Form, Field, ErrorMessage } from "formik"
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/Firebase'
import { toast } from 'react-toastify'
import * as Yup from "yup"

const contactSchemaValidation=Yup.object().shape({
    name:Yup.string().required("Name Field is Required!!"),
    email:Yup.string().email("Invalid Email").required("Email Field id Required!!")
})
const Addupdate = ({isOpen,Closer,isUpdate,contact}) => {
    const ContactFetcher=async (values)=>{
        try {
            const contactRef=collection(db,"contacts");
            await addDoc(contactRef,values)
            Closer()
            toast.success("Contact Added Successfully")
        } catch (error) {
            console.log(error)
        }
    }
    const UpdateFetcher=async (values,id)=>{
        try {
            const contactRef=doc(db,"contacts",id);
            await updateDoc(contactRef,values)
            Closer()
            toast.success("Contact Updated Successfully")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Model isOpen={isOpen} Closer={Closer}>
    <Formik
        validationSchema={contactSchemaValidation}
        initialValues={isUpdate?{
            name:contact.name,
            email:contact.email,
        }:{
            name:"",
            email:"",
        }}
        onSubmit={(data)=>{
            isUpdate?
            UpdateFetcher(data,contact.id):
            ContactFetcher(data)
        }}
    >
        <Form className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="name">Name</label>
                <Field name="name" className="px-2 h-10 border"/>
                <div className='text-red text-xs'>
                    <ErrorMessage name="name"/>
                </div>
                
            </div >
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="px-2 h-10 border"/>
            </div>
            <div className='text-red text-xs'>
                    <ErrorMessage name="email"/>
                </div>
            <div className='flex self-end'>
            <button type="submit" className='bg-orange px-2 py-1.5 '>{isUpdate?"Update":"Add"} Contact</button>   
            </div>
                  
        </Form>
    </Formik>
    </Model>
  )
}

export default Addupdate
