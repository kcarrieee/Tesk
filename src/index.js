import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TasksContextProvider } from './context/TasksContent';
import { PomodoroContextProvider } from './context/PomodoroContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PomodoroContextProvider>
  <TasksContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TasksContextProvider>
  </PomodoroContextProvider>
);


