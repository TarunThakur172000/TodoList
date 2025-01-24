import React from "react";


import TaskInput from "./TaskInput";
import ToDoList from "./TodoList";



const TaskList = () => {

   

  return (
    <div className="w-[100vw] p-5">
     <TaskInput/>
    
    <ToDoList/>
   
    </div>
  );
};

export default TaskList;
