import "./App.css";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/RegisterPatient";
import Main from "./components/Homepage/Main"
import AboutHome from "./components/Homepage/AboutHome";
import ContactHome from "./components/Homepage/ContactHome";
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
      <Toaster />
      <div className="bg-bgprimary flex">

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login-about" element={<About />} />
          <Route path="/login-contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<AboutHome/>}/>
          <Route path="/contact" element={<ContactHome/>}/>
        </Routes>

      </div>
    </>

  )
}

export default App;