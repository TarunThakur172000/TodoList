import React, { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { FaPlus,FaRegStar } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRepeat } from "react-icons/fa6";
import Calendar from 'react-calendar';
import { ImCross } from "react-icons/im";
import { IoIosTrash } from "react-icons/io";
import {useDispatch } from 'react-redux';
import { deletTask } from "../redux/taskSlice";


const Right = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(false);
    const [date, setDate] = useState(false);
    const dispatch=useDispatch();
    
    const del = ()=>{
      dispatch(deletTask(props.task.id));
      props.selectFunction(null);
    }

  return (
   <>
   <div className='w-[25%] flex flex-col gap-2 ml-[2rem]'>
    <div className='border-b-1 py-4 px-4'>
        <div className='flex justify-between'>
            <a className='flex items-center gap-4'><CiShoppingCart size={30}/><p className='font-semibold text-xl'>{props.task.text}</p></a> <span><FaRegStar size={30}/></span>
        </div>
    </div>
   <div className='border-b-1 py-4 px-4'>         
     <div className="flex items-center text-gray-700 font-semibold text-lg">    
     <div>
            <a className='flex items-center gap-4'> 
                <FaPlus size={30}
                 className={`text-sm cursor-pointer transform transition-transform duration-300 ${
                    isVisible ? 'rotate-180' : 'rotate-0'
                  }`}
                  onClick={() => setIsVisible(!isVisible)}
                />
                <p className='font-semibold text-xl '>Add Step</p>
                </a>
          </div>          
     </div>
     <div className=" rounded-lg  bg-gradient-to-b from-green-50 to-green-100 w-[100%] transition-all duration-500">
       <div
         className={`transition-all duration-500 overflow-hidden ${
           isVisible ? 'max-h-100 opacity-100 ' : 'max-h-0 opacity-0'
         }`}
       >
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil, corporis assumenda nobis
        
         quos ad atque, sed harum iusto odit dolorum. Ab odio sapiente, non incidunt quam iusto aspernatur expedita qui quae placeat vel.
       
       </div>
     </div>
   </div>

   <div className='border-b-1 py-4 px-4'>         
     <div className="flex items-center text-gray-700 font-semibold text-lg">    
     <div className={`text-sm cursor-pointer transform transition-transform duration-300 ${
                    timer ? '' : 'rotate-0'
                  }`}
                  onClick={() => setTimer(!timer)}
     >
            <a className='flex items-center gap-4'> 
                <CiBellOn  size={30}
                 color='black'
                />
                <p className='font-semibold text-xl '>Set Timer</p>
                </a>
          </div>          
     </div>
     <div className="rounded-lg  bg-gradient-to-b from-green-50 to-green-100 w-[100%] transition-all duration-500">
       <div
         className={`transition-all duration-500 overflow-hidden ${
            timer ? 'max-h-100 opacity-100 ' : 'max-h-0 opacity-0'
         }`}
       >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil, corporis assumenda nobis
        
        quos ad atque, sed harum iusto odit dolorum. Ab odio sapiente, non incidunt quam iusto aspernatur expedita qui quae placeat vel.
       
       </div>
     </div>
   </div>

   <div className='border-b-1 py-4 px-4'>         
     <div className="flex items-center text-gray-700 font-semibold text-lg">    
     <div className={`text-sm cursor-pointer transform transition-transform duration-300 ${
                    date ? '' : 'rotate-0'
                  }`}
                  onClick={() => setDate(!date)}>
            <a className='flex items-center gap-4'> 
                <MdOutlineDateRange size={30}
                color='black'
                 
                />
                <p className='font-semibold text-xl '>Add Due Date</p>
                </a>
          </div>          
     </div>
     <div className=" rounded-lg  bg-gradient-to-b from-green-50 to-green-100 w-[100%] transition-all duration-500">
       <div
         className={`transition-all duration-500 overflow-hidden ${
            date ? 'max-h-100 opacity-100 ' : 'max-h-0 opacity-0'
         }`}
       >
         <div>
          <Calendar/>
         </div>
       </div>
     </div>
   </div>
   
   <div className='border-b-1 py-4 px-4'>
        <div>
            <a className='flex items-center gap-5'><FaRepeat size={25} /><p className='font-semibold text-xl'>Repeat</p></a>
        </div>
    </div>
    
       <div className='mt-[4rem] flex justify-between border-t-4'>
        <div className='mt-[2rem]'>
       <ImCross onClick={()=>{props.selectFunction(null)}} className='cursor-pointer'/>
       </div>
       <p  className='mt-[2rem]'> </p>
        <div  className='mt-[2rem]'><IoIosTrash className='text-[1.5rem] cursor-pointer' onClick={()=>{del()}}/></div>

       </div>
       
   </div>
   </>
  )
}

export default Right