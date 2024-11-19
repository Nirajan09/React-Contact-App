import './App.css'
import Navbar from './Components/Navbar'
import { FiSearch } from "react-icons/fi"
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "./config/Firebase"

import ContactCard from './Components/ContactCard';
import Model from './Components/Model';
import Addupdate from './Components/Addupdate';
import useDisclosure from './Hooks/useDisclosure';
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InitialContact from './Components/InitialContact';
function App() {
  const [contact, setContact] = useState([]);
  const {isOpen,Closer,Opener}=useDisclosure()
  useEffect(() => {




    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts")

        onSnapshot(contactRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          
          setContact(contactLists)
          return contactLists
        })
        
      } catch (error) {
        console.log(error)
      }
    }
    getContacts()
  }, [])

const filteredContacts=(e)=>{
  const values=e.target.value;
  const contactRef = collection(db, "contacts")

        onSnapshot(contactRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          const filteredData=contactLists.filter((contact)=>contact.name.toLowerCase().includes(values.toLowerCase()))
          setContact(filteredData)
          return filteredData
        })
}

  return (
    <div className="max-w-[370px] p-4 mx-auto">
      <Navbar />
      
        <div className='flex relative items-center  flex-grow'>
          <FiSearch className='text-white text-[27px] absolute ml-1' />
          <input onChange={filteredContacts} type="text" placeholder='Search Contact' className="bg-transparent  border border-white rounded-md h-10 flex-grow pl-9 text-white" />
          <div>
            <AiFillPlusCircle onClick={Opener} className="w-[38px] h-[38px] text-white ml-[10px] cursor-pointer" />
          </div>
        
        
    </div>
    <div>
          {contact.length<=0?
          <InitialContact/>
          :
            contact.map((contact) => (
              <ContactCard key={contact.id} contact={contact}/>
            ))
          }

        </div>
        <div>
         <Addupdate isOpen={isOpen} Closer={Closer}/>
        </div>
        <ToastContainer position="bottom-center"/>
      </div>


  )
}

export default App
