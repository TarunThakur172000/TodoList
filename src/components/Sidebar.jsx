import React from 'react'
import { LuNotepadText,LuCalendarDays } from "react-icons/lu";
import { FaRegStar,FaRegMap,FaPlus  } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector, useDispatch } from 'react-redux';


const Sidebar = () => {
  const { tasks, completedTasks } = useSelector((state) => state.tasks);

  const darkMode = useSelector((state) => state.theme.darkMode);
    const data = [
      { title: 'One', value: tasks.length, color: '#3F9142' },
      { title: 'Two', value: completedTasks.length, color: `${darkMode ? "#A0EDA4" : "#142E15"}` },
    ];
  return (
    <>
    <div className={`w-full md:w-72 ${darkMode ? "bg-[#2C2C2C]" : "bg-green-50"} h-screen md:h-auto p-6 flex flex-col`}>
      {/* Profile Section */}
      <div className="text-center mb-8">
        <img
          src="https://s3-alpha-sig.figma.com/img/333c/2d05/a5f50ecf137e000854b1631514ec0670?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9W6DcUAAaAr0MZ77Q1MPDVSa7SSffHWMHXNudD4D7lhB56XcfYMM-RSld2Qfd~ibLurQ4moQi1m7MQGPYpkVtUbxIS9N4SFq~h0VKSLmByib444Ej0iz~qk3h7G4atc0M2hTatM1ptTj3-PA9VXPBXZdwIJotNaEY~rwdgKiE2PnH2Gn5LQ9RN7HzhlFEkT0ZEray-60mID7XEiY~UsPvDsevN3hjWPOCR5UTVj4CvqW6eB7xWY~jPTDChrPc0OyioI9NL3PxQiIRIPhQIq2sW-sDB4~Fn1lZZBCJF-WGPrGJzkGpKz9e9bKiApYCDXAxcr2i2Wr~Jz9ufD90P5qQ__"
          alt="Profile"
          className="w-25 h-25 mx-auto rounded-full border-2 border-green-300"
        />
        <p className="mt-4 font-medium text-lg">Hey, ABCD</p>
      </div>

      {/* Navigation */}
      <nav className={`flex flex-col ${ darkMode ? "bg-[#242424]" :"bg-white"} gap-2`}>
        <button className="flex items-center cursor-pointer gap-3 w-full px-4 py-2 rounded-lg hover:bg-green-200">
          <LuNotepadText size={25} />  <span className="text-sm md:text-base">All Tasks</span>
        </button>
        <button className="flex items-center gap-3 cursor-pointer w-full px-4 py-2 rounded-lg hover:bg-green-200">
        <LuCalendarDays size={25} />  <span className="text-sm md:text-base">Today</span>
        </button>
        <button className="flex items-center gap-3 cursor-pointer w-full px-4 py-2 rounded-lg hover:bg-green-200">
        <FaRegStar size={25}/>   <span className="text-sm md:text-base">Important</span>
        </button>
        <button className="flex items-center gap-3 cursor-pointer w-full px-4 py-2 rounded-lg hover:bg-green-200">
        <FaRegMap size={25}/>  <span className="text-sm md:text-base">Planned</span>
        </button>
        <button className="flex items-center gap-3 cursor-pointer w-full px-4 py-2 rounded-lg hover:bg-green-200">
         <IoPersonAddSharp size={25}/> <span className="text-sm md:text-base">Assigned to me</span>
        </button>
      </nav>

      {/* Add List */}
      <button className="flex items-center gap-3 w-full cursor-pointer px-4 py-2 mt-6 text-green-600 rounded-lg hover:bg-green-100">
        <span><FaPlus /></span>
        <span className="text-black md:text-base">Add list</span>
      </button>

      {/* Today's Tasks Section */}
      <div className={`mt-10 ${ darkMode ? "bg-[#242424]" :"bg-white"} p-4 rounded-lg shadow flex-1`}>
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-lg font-medium">Today Tasks</h3>
          <span className="material-icons text-gray-400 text-sm">info</span>
        </div>
        <p className="text-2xl font-semibold mt-4">{tasks.length+completedTasks.length}</p>
        <div className="mt-6">
<PieChart
      data={data}
      radius={40}
      lineWidth={20}
      segmentsStyle={{ backgroundColor: '#fff' }}
      segmentsShift={(index) => (index === 0 ? 1 : 0)}
      animate
    />

        
          <div className="flex justify-between mt-4 text-xs md:text-sm">
            <span className="text-gray-600">Pending : {tasks.length}</span>
            <span className="text-gray-600">Done :{completedTasks.length} </span>
          </div>
        </div>
      </div>
    </div>
 
    </>
  )
}

export default Sidebar