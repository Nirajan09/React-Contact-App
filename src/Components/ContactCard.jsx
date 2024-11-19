import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi"
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io"
import { doc, deleteDoc } from 'firebase/firestore'
import {db} from "../config/Firebase"
import Addupdate from './Addupdate'
import useDisclosure from '../Hooks/useDisclosure'
import { toast } from 'react-toastify'
const ContactCard = ({contact}) => {
    const {isOpen,Opener,Closer}=useDisclosure()
    const ContactDelete= async (id)=>{
        
        try {
           await deleteDoc(doc(db,"contacts",id))
           toast.success("Contact Deleted Successfully")
        } catch (error) {
            console.log(error)
        }
        
    }
  return (
    <div key={contact.id} className='flex justify-between p-2 my-2 h-[64px] flex-row bg-[#FFEAAE]  rounded-lg'>
                <div className='flex gap-2'>
                  <HiOutlineUserCircle className=' h-[48px] w-[48px] text-orange'/>
                <div>
                  <h2 className='font-medium text-base'>{contact.name}</h2>
                  <p className='text-[15px]'>{contact.email}</p>
                  </div>
                </div>
                
                <div className='flex items-center'>
                  <RiEditCircleLine onClick={Opener} className='h-[32px] w-[32px] cursor-pointer'/>
                  <IoMdTrash onClick={()=>ContactDelete(contact.id)}className='h-[32px] w-[32px] text-purple cursor-pointer'/>
                
              </div>
              <Addupdate contact={contact} isUpdate isOpen={isOpen} Opener={Opener} Closer={Closer}/>
              </div>
  )
}

export default ContactCard
