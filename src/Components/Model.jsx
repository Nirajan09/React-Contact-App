import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {createPortal} from "react-dom"

const Model = ({isOpen,Closer,children}) => {

  return createPortal(
    <>
    
        {isOpen && (
            <div  className='grid place-items-center absolute top-0 backdrop-blur h-screen w-screen z-40 '>
                <div  className='h-[330px] min-w-[348px] bg-white  p-4 relative z-50 m-auto'>
                    <div className='flex justify-end'>
                    <AiOutlineClose onClick={Closer} className='text-2xl cursor-pointer'/>
                    
                    </div>
                    {children}
                </div>
              
            </div>

        ) 
        }
    </>
  ,document.getElementById("modal-root"))
}

export default Model
