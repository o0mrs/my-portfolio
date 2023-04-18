import { Logouta,Signupa,auth } from "../firebase";
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(0);
  const [pfp, setpfp] = useState('./logo.png')
  let navigate = useNavigate();
  useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
              
              const pg = user.photoURL;
              setpfp(pg)
              seta(1)
            } else {
                // navigate("/auth", { replace: true });

            }
          });

    
},[])
    return(
      <div className="navbar  md:px-14  md:pt-3 text-white">

<div className="modal" id="my-modal-2">
  <div className="modal-box bg-base-300">
    <h3 className="font-bold text-lg">Resume??</h3>
    <p className="py-4">THIS IS my resume what do you need more??? anyway if you need anything more just hit me up on any Social media</p>
    <div className="modal-action">
     <a href="#" className="btn text-white">OK!</a>
    </div>
  </div>
</div>
  <div className="navbar-start">
     <a className="btn btn-ghost text-white text-[#7E74F1] normal-case text-xl"><i className="mr-3 fa-brands fa-drupal"></i> Omar.</a>


  </div>
  <div className="navbar-center sm:hidden md:flex">
  <a href="https://mindix.xyz" target="_blank" className="">
  <div  className='inter text-md mr-4 cursor-pointer p-2 hover:bg-gray-700/25 rounded-lg'>
Services
    </div>
    </a>
    <a href="#Portfolio">
    <div className='inter text-md mr-4 cursor-pointer p-2 hover:bg-gray-700/25 rounded-lg'>
    Portfolios
    </div>
    </a>
    <a href="#Specialized">
    <div className='inter text-md mr-4 cursor-pointer p-2 hover:bg-gray-700/25 rounded-lg'>
    Speciality
    </div>
    </a>
    <a href='https://github.com/o0mrs' target="_blank">
    <div className='inter text-md mr-4 cursor-pointer p-2 hover:bg-gray-700/25 rounded-lg'>
    Github
    </div>
    </a>

  </div>
  <div className="navbar-end">
    {/* <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button> */}
    <div className="sm:hidden md:flex">
    <a href="#my-modal-2" >
    <div className="inter cursor-pointer py-[8px] px-[10px] hover:bg-white  hover:text-black rounded-lg text-md border border-white">
    Resume
    </div>
    </a>
    {/* <div className="inter cursor-pointer py-[8px] px-[10px] hover:bg-[#6157cc] text-[#7E74F1] hover:text-white rounded-lg text-md border border-[#7E74F1]">
    Resume
    </div> */}
    </div>
    <button className=" md:hidden btn-circle">
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="">
    <i className="fa-solid fa-bars-staggered text-xl"></i>      </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
    <a href="https://mindix.xyz" target="_blank" className=""> <li ><a>Services</a></li></a>
    <a href="#Portfolio"> <li ><a>Portfolios</a></li></a>
    <a href="#Specialized"> <li ><a>Speciality</a></li></a>
    <a href='https://github.com/o0mrs' target="_blank"> <li ><a>Github</a></li></a>
      </ul>
    </div>
  
    {/* <div className="dropdown  text-white">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
    <i className="fa-solid fa-bars-staggered text-xl"></i>      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Homepage</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>About</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Projects</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>contact</a></li>
      </ul>
    </div> */}
    </button>
  </div>
</div>

    )
}
export default NavBar;