
import axios from 'axios'
import {  useEffect } from 'react';
import useAuth from "../cutomeHooks/useAuth";
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
    baseURL : 'http://localhost:5000/',
    withCredentials : true
})


const useAxios = () => {
const {logOut} = useAuth()
const navigate = useNavigate()
 
    useEffect(()=>{
        axiosSecure.interceptors.response.use( res => {
            // console.log('error tracked in the interceptor', res)
            return res;

        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if(error.response.status === 401 || error.response.status === 403){
                    console.log('logout this user')
                    logOut()
                    .then(() =>{
                        console.log('user succesfully logout ')
                        navigate('/login')
                    })
                    .catch((err)=>console.log('user can not logout '+ err))

            }
        }
        )
    },[])

   return axiosSecure;
};

export default useAxios;