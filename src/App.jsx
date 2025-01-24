import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import TaskList from './components/TaskList'
import Login from "./components/Login";
import { useSelector} from "react-redux";
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)
  const darkMode = useSelector((state) => state.theme.darkMode);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  
  if (!isAuthenticated) {
  
    return  <> <Login/></>
      
    
  }

  return (
    
    <div className={darkMode ? "bg-[#242424] text-white" :" "}>
       <Header/>
      <div className='flex'>
     
      <Sidebar/>
      <TaskList/>
      </div>
    </div>
  )
}

export default App;