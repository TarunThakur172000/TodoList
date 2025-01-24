// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      dispatch(login({ username, password }));
    }
  };

  return (
    <div className={`w-[100%] mx-auto mt-10 bg-gradient-to-b  to-green-100 shadow-md rounded-lg p-6`}>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
      >
        Login
      </button>

      <button className="w-full mt-2 cursorpointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out" onClick={()=>{alert("username:admin \n password:admin@123")}}>Get Credential</button>
    </div>
  );
};

export default Login;
