import { createSlice } from '@reduxjs/toolkit';

// Load tasks from localStorage
const loadState = (key, fallback) => {
  const savedData = localStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : fallback;
};


const initialState = {
  
   
  
  tasks: loadState("tasks", [
    {
      id: 1,
      text: 'Buy groceries',
      completed: false,
      important: false,
      priority: 'High',
      dueDate: '2025-01-25',
      reminder: '2025-01-24T18:00',
      repeat: 'weekly',
      tags: ['shopping', 'urgent'],
      notes: 'Remember to buy milk, eggs, and bread.',
    },
    {
      id: 2,
      text: 'Finish project report',
      completed: false,
      important: true,
      priority: 'Medium',
      dueDate: '2025-01-28',
      reminder: '2025-01-27T14:00',
      repeat: 'none',
      tags: ['work', 'deadline'],
      notes: 'Include financial analysis and conclusion.',
    },
  ]),
  completedTasks: loadState("completedTasks", [
    { id: 6, text: 'Read a book', completed: true, important: false, priority: 'Low' },
    { id: 7, text: 'Clean the house', completed: true, important: false, priority: 'Medium' },
  ]),
};

// Save tasks to localStorage
const saveState = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleComplete: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const [movedTask] = state.tasks.splice(taskIndex, 1);
        movedTask.completed = true;
        state.completedTasks.push(movedTask);
      } else {
        const completedTaskIndex = state.completedTasks.findIndex((task) => task.id === taskId);
        if (completedTaskIndex !== -1) {
          const [movedTask] = state.completedTasks.splice(completedTaskIndex, 1);
          movedTask.completed = false;
          state.tasks.push(movedTask);
        }
      }
      saveState("tasks", state.tasks);
      saveState("completedTasks", state.completedTasks);
    },

    toggleImportant: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.important = !task.important;
        saveState("tasks", state.tasks);
      }
    },

    setPriority: (state, action) => {
      const { id, priority } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.priority = priority;
        saveState("tasks", state.tasks);
      }
    },

    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
      text: action.payload,
      completed: false,
      important: true,
      priority: 'Medium',
      dueDate: '2025-01-28',
      reminder: '2025-01-27T14:00',
      repeat: 'none',
      tags: ['work', 'deadline'],
      notes: 'Include financial analysis and conclusion.',
      };
      state.tasks.push(newTask);
      saveState("tasks", state.tasks);
    },
    deletTask:(state,action)=>{
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
        }
        saveState("tasks", state.tasks);
        
    },
   
  },
});

export const { toggleComplete, toggleImportant, addTask, setPriority, deletTask } = tasksSlice.actions;

export default tasksSlice.reducer;