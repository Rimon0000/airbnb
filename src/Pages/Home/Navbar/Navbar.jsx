
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import "./Navbar.css"
import { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";


const Navbar = () => {

   


    return (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <Link to="/" className="mr-3">
              <img className='w-15 h-14 rounded-lg' src={logo} alt="" />
            </Link>
          </div>
          {/* <div className="search-bar rounded-xl border-slate-600 mx-10">
             <div className="search-bar-text text-sm">Anywhere</div>
             <div className="search-bar-text text-sm">Any Week</div>
             <div className="text-semibold text-sm text-pink-600">Add guests</div>
             <div className="rounded-full text-white bg-red-400 p-2">
               <FaSearch/>
             </div>
          </div> */}
       </div>
    );
};

export default Navbar;