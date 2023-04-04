import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Pack from "../assets/img/landingPage/Pack.jpg";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/img/landingPage/profile.png";
import toast from 'react-hot-toast';


const Login = () => {

  
  const [data, setData] = useState({
    email:"",
    password:""
  });

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    const {email,password} = data
    if(email && password){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/`,{
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
      // console.log(dataRes);
      toast(dataRes.message);

      if(dataRes.alert){
        navigate("/home")
      }
     
    }
    else{
      alert("Please Enter required fields")
    }
  }

 
  return (
    <div className="body overflow-hidden">
      <Navbar></Navbar>

      <div className="body lg:flex px-18 w-full lg:h-5/6 ">
        <img src={Pack} alt="Graphics"
          className="lg:w-1/2 lg:my-auto lg:mx-auto mt-24"
        />
        <div className="lg:ml-auto lg:w-1/2 w-screen">

          <div className="bg-white flex flex-col justify-items-center items-center py-4 px-4 rounded shadow-md lg:w-3/4 w-full my-7 ml-auto ">

            <img src={profile} alt="profile pic" className="h-20 my-6 border-2 rounded-full" />

            <h1 className="py-2 px-8 text-lg font-poppins font-semibold rounded">
              Login to Your Account
            </h1>

            <form 
              className="flex flex-col w-full px-8" 
              onSubmit={handleSubmit}  
            >
              <label htmlFor="password" className="font-poppins pt-6 pb-1 text-lg font-bold">
                Email
              </label> 
              <input 
                className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none"
                type="email" 
                placeholder="e.g : abcd123@gmail.com"
                required
                name="email"
                value={data.email}
                onChange={handleOnChange}
              />

              <label htmlFor="password" className="font-poppins pt-6 pb-1 text-lg font-bold">
                Password
              </label>

              <input  
                className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none"
                type="password" 
                placeholder="password"
                required
                name="password"
                value={data.password}
                onChange={handleOnChange}
              />

              <div className="flex justify-center items-center py-3">
                <button 
                  type="submit"
                  className="text-lg mt-10  bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary"
                >
                  Login
                </button>
              </div>
            </form>

            <h1 className="font-poppins text-base pt-5">
              New User,<Link to="/register">Register here</Link>
            </h1>

          </div>

        </div>
      </div>
      <div className="mt-[39px] relative bottom 0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Login









// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Pack from "../assets/img/landingPage/Pack.jpg";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import profile from "../assets/img/landingPage/profile.png";
// import axios from "axios";

// const Login = ({ setLoginPatient }) => {

//   const history = useNavigate();

//   const [patient, setPatient] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = e => {
//     const { name, value } = e.target
//     setPatient({
//       ...patient,
//       [name]: value
//     })
//   }

//   const login = () => {
//     axios.post("http://localhost:5000/login", patient)
//       .then(res => {
//         alert(res.data.message)
//         setLoginPatient(res.data.patient)
//         history.push("/")

//       })
//   }

//   return (
//     <div className="body overflow-hidden">
//       <Navbar></Navbar>

//       <div className="body lg:flex px-18 w-full lg:h-5/6 ">
//         <img src={Pack} alt="Graphics"
//           className="lg:w-1/2 lg:my-auto lg:mx-auto mt-24"
//         />
//         <div className="lg:ml-auto lg:w-1/2 w-screen">

//           <div className="bg-white flex flex-col justify-items-center items-center py-4 px-4 rounded shadow-md lg:w-3/4 w-full my-7 ml-auto ">

//             <img src={profile} alt="profile pic" className="h-20 my-6 border-2 rounded-full" />

//             <h1 className="py-2 px-8 text-lg font-poppins font-semibold rounded bg-primary">
//               Patient Login
//             </h1>

//             <form className="flex flex-col w-full px-8">
//               <label htmlFor="password" className="font-poppins pt-6 pb-1 text-lg font-bold">
//                 Email
//               </label>

//               <input type="text" name="email" id="username" value={patient.email}
//                 className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none"
//                 onChange={handleChange}
//                 required
//               />

//               <label htmlFor="password" className="font-poppins pt-6 pb-1 text-lg font-bold">
//                 Password
//               </label>

//               <input type="password" name="password" id="password" value={patient.password}
//                 className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none"
//                 onChange={handleChange}
//                 required
//               />

//               <div className="flex justify-center items-center py-3">
//                 <button type="submit"
//                   className="text-lg mt-10  bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary"
//                   onClick={login}>
//                   Login
//                 </button>
//               </div>

//             </form>

//             <h1 className="font-poppins text-base pt-5">
//               New User,<button onClick={() => history("/register")}>Register here</button>
//             </h1>

//           </div>

//         </div>
//       </div>
//       <div className="mt-[39px] relative bottom 0">
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// }

// export default Login