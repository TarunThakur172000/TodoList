// src/components/Logout.js
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='flex justify-end'>
    <button
      onClick={handleLogout}
      className={`cursor-pointer ml-2 ${!darkMode ? "bg-gradient-to-b  to-green-100 " : " bg-gradient-to-b  to-green-100 "} text-gray px-4 py-2 rounded text-center`}
    >
      Logout
    </button>
    </div>
  );
};

export default Logout;
