import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Opportunities from "./pages/Opportunities";
import About from "./pages/About";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from "./pages/Dashbord";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Shared/Routes/PrivateRoute';




function App() {

 
  // const { currentUser } = useContext(AuthContext);

  // const RequireAuth = ({children}) => {
  //   return currentUser ? (children) : navigate('/login')
  // }

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/opportunities" element={<Opportunities/>} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
        <Route path="/dashbord" element={<PrivateRoute/>}>
          <Route path="/dashbord" element={<Dashbord/>} />
        </Route>
      </Routes>
    </BrowserRouter>
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
    />
    </>
  );
}

export default App;
