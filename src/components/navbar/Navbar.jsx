import { Link, NavLink } from "react-router-dom";
import '../../index.css'
import { AuthContext } from "../provider/Authprovider";
import { useContext } from "react";
import '../../index.css'



const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

  const hanleLogOUt = () => {
    logOut()
    .then(() => console.log('user succesfully logout '))
    .catch((err)=>console.log('user can not logout '+ err))
  }


  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


const links = <>


      <NavLink to={'/'}>         <li className="font-bold uppercase lg:mr-10">Home      </li></NavLink>
      <NavLink to={'/About'}>    <li className="font-bold uppercase lg:mr-10">About     </li></NavLink>
      <NavLink to={'/Blog'}>     <li className="font-bold uppercase lg:mr-10">Blog      </li></NavLink>
      {/* <NavLink to={'/Contact'}>  <li className="font-bold uppercase md:mx-8">Contact   </li></NavLink> */}
      {
        user&& user ? <>
                      <NavLink to={'/markedservices'}><li className="font-bold uppercase text-lime-400 cursor-pointer lg:mr-10">  My Booked  </li> </NavLink>
                      <li onClick={hanleLogOUt} className="font-bold uppercase text-lime-400 cursor-pointer lg:mr-10">Sing Out</li> 
                      </>
                    : <NavLink to={'/login'}>    <li className="font-bold uppercase lg:mr-8">login or register </li></NavLink>
      } 
</>



return (

<div>
  

<div className="navbar ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn  bg-slate-300  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu text-white text-left gap-y-7 menu-sm dropdown-content p-10 mt-3 z-[1]  shadow bg-base-100  w-52">
        {
          links
        }
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
     <Link to={'/'}>  <img className="image-full hidden lg:block w-20 h-10 lg:h-20 " src="../../../src/assets/logo.svg" alt="" /> </Link>
  </div>
  <div className="navbar-center  lg:mt-5 hidden lg:flex">
    <ul className="menu  menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end lg:mt-3">

    <button className="btn   btn-ghost btn-circle">
        <label className="swap swap-rotate">
          <input onClick={myFunction} type="checkbox" />
          <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          <svg className="swap-off fill- w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>
    </button>

    {
      user && user ?   <><img className="rounded-full mx-3 w-[50px] h-[50px]" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" /></>             : ''
    }

    <button className="btn   hidden md:block btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

    <button className="btn rounded-md px-5 capitalize bg-white text-[#FF3811] border-[#FF3811] ">Appoinment</button>

  </div>
</div>
        </div>
    );
};

export default Navbar;