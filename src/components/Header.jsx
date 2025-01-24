import React from 'react';
import Logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import grid from '../assets/app-grid.svg';
import list from '../assets/list.svg';
import { MdNightsStay, MdOutlineWbSunny } from "react-icons/md";
import Logout from './Logout';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../redux/themeSlice'; // Import the action
import { toggleDisplay } from '../redux/displaySLice';
import Mywork from './Mywork';
const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const isListView = useSelector((state) => state.displayState.display);

  const dispatch = useDispatch();
  
  return (
    <nav className={`flex justify-between items-center p-5 ${darkMode ? 'bg-[#242424] text-white' : 'bg-white text-black'}`}>
      <div>
        <span>
          <img src={Logo} alt='Logo' />
        </span>
      </div>

      <div className='flex justify-evenly items-center gap-4'>
        <Mywork/>
        <Logout />
        <span>
          <CiSearch size={25} />
        </span>
        <span onClick={()=>{dispatch(toggleDisplay())}} className='cursor-pointer'>
        {isListView ? 
        <img src={grid} alt='Grid' className={`w-6 h-6 ${darkMode ? "invert" : ""} `} />
          : 
          <img src={list} alt='Grid' className={`w-6 h-6 ${darkMode ? "invert" : ""} `} />
        }
        </span>
        <span onClick={() => dispatch(toggleDarkMode())} className="cursor-pointer">
          {darkMode ? 
          <MdOutlineWbSunny size={25} />
          :
          <MdNightsStay size={25} />
              
              }
        </span>
      </div> 
    </nav>
  );
};

export default Header;
