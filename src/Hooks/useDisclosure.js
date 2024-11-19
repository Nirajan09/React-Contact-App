import { useState } from "react"

const useDisclosure = () => {
    const [isOpen,setOpen]=useState(false)


  const Opener=()=>{
    setOpen(true)
  }
  const Closer=()=>{
    setOpen(false)
  }
  return ({Opener,Closer,isOpen})
}

export default useDisclosure
