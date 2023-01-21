import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(0);
  const [pfp, setpfp] = useState('./logo.png')
  let navigate = useNavigate();
    return(
      <div className="navbar  md:px-14  md:pt-3 text-white">
  <div className="navbar-start">
     <a className="btn btn-ghost text-white  normal-case text-xl"><i class="mr-3 fa-brands fa-drupal"></i> Omar.</a>


  </div>
  <div className="navbar-center sm:hidden md:flex">
    <div className='inter text-md mr-4 cursor-pointer p-2 font-thin hover:bg-gray-700/25 rounded-lg'>
      Srvices
    </div>
    <div className='inter text-md mr-4 cursor-pointer p-2 hover:bg-gray-700/25 rounded-lg'>
    Portfolios
    </div>
    <div className='inter text-md mr-4 cursor-pointer p-2 hover:bg-gray-700/25 rounded-lg'>
    Experience
    </div>
    <div className='inter text-md mr-4 cursor-pointer p-2 hover:bg-gray-700/25 rounded-lg'>
    Blog
    </div>

  </div>
  <div className="navbar-end">
    {/* <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button> */}
    <div className="sm:hidden md:flex">
    <div className="inter cursor-pointer py-[8px] px-[10px] hover:bg-white hover:text-black rounded-lg text-md border border-white">
    Resume
    </div>
    </div>
    <button className=" md:hidden btn-circle">
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="">
    <i class="fa-solid fa-bars-staggered text-xl"></i>      </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Homepage</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>About</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Projects</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>contact</a></li>
      </ul>
    </div>
  
    {/* <div className="dropdown  text-white">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
    <i class="fa-solid fa-bars-staggered text-xl"></i>      </label>
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