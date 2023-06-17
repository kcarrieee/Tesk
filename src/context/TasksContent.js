import { createContext, useState} from "react";


export const TasksContext = createContext();



export const TasksContextProvider = ({ children }) => {
 const [tasksLen, setTasksLen] = useState([]);
 console.warn(tasksLen)

  

  return (
    <TasksContext.Provider value={{tasksLen, setTasksLen}}>
      {children}
    </TasksContext.Provider>
  );
};