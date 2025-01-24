import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import themeReducer from "./themeSlice";
import authReducer from './authSlice';
import displayReducer from './displaySLice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    theme: themeReducer,
    displayState: displayReducer,
  },
});
