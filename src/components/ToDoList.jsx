import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, toggleImportant } from "../redux/taskSlice";
import Right from "./Right";

function ToDoList() {
  const dispatch = useDispatch();
  const { tasks, completedTasks } = useSelector((state) => state.tasks);
  const isListView = useSelector((state) => state.displayState.display);
  // State to track the selected task
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="p-6 w-[100%] mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

      <div className='flex'>
        {/* Pending Tasks */}
        <ul className={`space-y-4 w-full ${!isListView ?"grid grid-cols-3 gap-4" : ""}`}>
  {tasks.map((task) => (
    <li
      key={task.id}
      onClick={() => setSelectedTask(task)} // Set selected task on click
      className="flex items-center justify-between bg-gray-100 p-4 rounded shadow cursor-pointer"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => {
            e.stopPropagation();  // Prevent triggering parent click
            dispatch(toggleComplete(task.id));
          }}
          className={`mr-3 h-5 w-5 border border-gray-400 rounded focus:ring-2 focus:ring-green-500 ${
            task.completed ? 'bg-green-500' : 'bg-transparent'
          }`}
        />
        <span className={task.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
          {task.text}
        </span>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering parent click
          dispatch(toggleImportant(task.id));
        }}
        className={`ml-4 transition-all ${
          task.important ? 'text-black text-[1.5rem]' : 'text-gray-400'
        }`}
      >
        ★
      </button>
    </li>
  ))}
</ul>


        {/* Right Section - Only show if a task is selected */}
        {selectedTask && (
  <Right
    className={`absolute top-0 right-0 w-1/3 h-full bg-white shadow-lg transition-transform duration-500 ${
      selectedTask ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}
    task={selectedTask}
    onClose={() => setSelectedTask(null)}
    selectFunction={setSelectedTask}
  />
)}
      </div>

      {/* Completed Tasks */}
      <h2 className="text-xl font-bold mt-8 mb-4 ">Completed Tasks</h2>
      <ul className="space-y-4">
        {completedTasks.map((task) => (
          <li
            key={task.id}
            onClick={() => setSelectedTask(task)}
            className="flex items-center justify-between bg-green-100 p-4 rounded shadow cursor-pointer"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleComplete(task.id))}
                className="mr-3"
              />
              <span className="line-through text-gray-500">{task.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
