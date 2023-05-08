import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Opportunities from "./pages/Opportunities";
import About from "./pages/About";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import SingleProject from "./pages/SingleProject";
import ImportantProjects from "./pages/ImportantProjects";
import Archive from "./pages/Archive";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Shared/Routes/PrivateRoute';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AddProject from "./pages/AddProject";
import NotFound from "./pages/NotFound";




function App() {

  return (
    <>
     <BrowserRouter>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={false} 
    />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/opportunities" element={<Opportunities/>} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
         <Route path="/*" element={<NotFound/>} />
        <Route path="/profile" element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
        <Route path="/important-projects" element={<PrivateRoute/>}>
          <Route path="/important-projects" element={<ImportantProjects/>} />
        </Route>
        <Route path="/stats" element={<PrivateRoute/>}>
          <Route path="/stats" element={<Stats/>} />
        </Route>
         <Route path="/archive" element={<PrivateRoute/>}>
          <Route path="/archive" element={<Archive/>} />
        </Route>
        <Route path="/add-project" element={<PrivateRoute/>}>
          <Route path="/add-project" element={<AddProject/>} />
        </Route>
        <Route path="/project/:id" element={<PrivateRoute/>}>
          <Route path="/project/:id" element={<SingleProject/>} />
        </Route>
        <Route path="/privacy" element={<PrivacyPolicy/>} />
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
