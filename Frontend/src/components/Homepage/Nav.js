import React from "react";
import Plus from "../../assets/img/landingPage/plus.png";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    const handleLogout = () => {
        toast("Logout successful");
        navigate("/");
    }

  return (
    <nav className="bg-white w-screen h-14 shadow-sm px-16 lg:py-3 flex justify-items-center items-center">
        <img src={Plus} alt="logo" className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2" />
        <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2">
          <Link to="/home">Patient Care</Link>
        </h1>
        <ul className="flex ml-auto lg:w-60 justify-evenly  font-lato font-semibold w-64 ">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className="bg-primary py-2 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary mr-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
  );
}
