import {  useContext } from "react";
import {  Navigate } from "react-router";
import { AuthContext } from "../provider/Authprovider";
import { useLocation } from "react-router-dom";


const Privetroute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const locate = useLocation()
    console.log(locate)
  
    if(loading){
      return   <progress className="progress progress-info w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return  <Navigate  state={locate.pathname}  to={'/login'} replace > </Navigate>;
};

export default Privetroute;