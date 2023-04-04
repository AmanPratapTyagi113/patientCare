import Footer from "../Footer";
import React from "react";
import doctorsImg from "../../assets/img/landingPage/doctorsImg.png";
import { Link } from "react-router-dom";
import Nav from "./Nav";


function Main() {

  return (
    <div className="body w-full ">
    
      <Nav></Nav>

      <div className="body lg:flex px-18 w-full lg:h-5/6 align-item">
        <img src={doctorsImg} alt="doctorsimg"
          className="w-1/2 lg:my-auto mx-auto mt-24 "
        />

        <div className="ml-auto w-center  text-center mt-40 justify-items-center text-[22.5px] font-lato">
          <p>
            We care because we love to serve humanity.
            It’s not just our duty but a passion to serve you.<br />
            Serving humanity gives peace to our souls.
            We feel peace inside when we worked for your health.<br />
            Doctors are people who care, love, and serve.
            We practice you to heal your pain.<br /><br />
            <div className="ml-0 text-primary text-[30px]"><b>Trust us we care about you.</b></div>
          </p><br />

          <div className="w-100% my-auto p-8 bg-slate-200 rounded grid-cols-2 ">
            <button className="text-[20px] mb-4 mr-4 bg-primary py-2 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-40"
            >
              <Link to="https://tushar-2021.github.io/Weekaway/">PREDICTION</Link>
            </button>
            <button className="text-[20px] mt-2 ml-4 bg-primary py-2 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-40 "
            >
              BLOG
            </button>

          </div>

        </div>
      </div>

      <div className="mt-[40px] relative bottom 0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;



// import React from "react";
// import Navbar from "../Navbar";
// import Pack from "../../assets/img/landingPage/Pack.jpg";
// // import Login from "../components/Login";
// import Footer from "../Footer";

// export default function LandingPage(props) {
//   return (
//     <div className="body overflow-hidden">
//       <Navbar></Navbar>

//       <div className="body lg:flex px-18 w-full lg:h-5/6 ">
//         <img src={Pack} alt="Graphics"
//           className="lg:w-1/2 lg:my-auto lg:mx-auto mt-24"
//         />
//         {/* <div className="lg:ml-auto lg:w-1/2 w-screen">
//           <Login
//             setToastShow={props.setToastShow}
//             settoastCondition={props.settoastCondition}
//           ></Login>
//         </div> */}
//       </div>
//       <div className="mt-[39px] relative bottom 0">
//           <Footer></Footer>
//       </div>
//     </div>
//   );
// }
