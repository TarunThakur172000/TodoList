import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTask } from '../redux/taskSlice';

import '@fortawesome/fontawesome-free/css/all.min.css';

const TaskInput = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [task, setTask] = useState('');
const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));  // Dispatch the action to add task
      setTask('');  // Clear input field
    }
  };

  

  return (
    <div>
       
        
      <div className={`flex items-center ${darkMode ? "text-white" : "text-gray-700"} font-semibold text-lg`}>
        <span className="mr-[1rem]">To Do</span>
        <span
          className={`text-sm cursor-pointer transform transition-transform duration-300 ${
            isVisible ? 'rotate-180' : 'rotate-0'
          }`}
          onClick={() => setIsVisible(!isVisible)}
        >
          ▼
        </span>
      </div>

      <div className={`border border-gray-300 rounded-lg p-4 ${darkMode ? "bg-[#2F3630]" : "bg-gradient-to-b from-green-50 to-green-100"} w-[100%] transition-all duration-500`}>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isVisible ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="items-center">
            <input
              type="text"
              placeholder="Add A Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-grow border-none outline-none bg-transparent text-gray-700 text-base placeholder-gray-400 w-full"
            />
          </div>

          <div className="flex justify-between items-end mt-4">
            <div className="flex space-x-4 text-gray-600">
              <i className="fas fa-bell cursor-pointer"></i>
              <i className="fas fa-sync-alt cursor-pointer"></i>
              <i className="fas fa-calendar-alt cursor-pointer"></i>
            </div>

            <button
              onClick={handleAddTask}
              className="ml-4 bg-green-200 text-green-800 px-4 py-2 rounded-lg font-bold text-sm"
            >
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
