import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import MarkedItems from "./MarkedItems";
// import axios from "axios";
import useAxios from "../cutomeHooks/useAxios";


const Markedservices = () => {
    const {user} = useContext(AuthContext);
    const [marked,setMarked] = useState([])
    const [sortOrder, setSortOrder] = useState('asc');  //sorting data 
    const axiosSecure = useAxios()


    const url = `bookmark?email=${user?.email}`;
    // const url = `http://localhost:5000/bookmark?email=${user?.email}`;

    useEffect(()=> {

        // axios.get(url,{withCredentials:true})
        // .then(res => setMarked(res.data))

        axiosSecure.get(url)
       .then(res => setMarked(res.data))

    },[url,axiosSecure])

    // useEffect(()=> {
    //     fetch(`http://localhost:5000/bookmark?userEmail=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => setMarked(data))
    // },[])



    // item delete handle function
    const handleDelete = (id) => {
        const process = confirm('are you sure to continue delete process ? ')
        if (process){
            fetch(`http://localhost:5000/bookmark/${id}` ,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted succesfully')
                    const remaining = marked.filter(booked => booked._id !== id)
                    setMarked(remaining)
                }
            })
        } }


// item update or confirm handleing funtion 
    const handleUpdate = (id) => {
            fetch(`http://localhost:5000/bookmark/${id}`, {
                method: 'PATCH',
                headers : {  'content-type' : 'application/json'  },
                body : JSON.stringify({status:'confirm'}) 
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    const remaining = marked.filter(booked => booked._id !== id);  
                    const updatedItem =  marked.find(booked => booked._id === id)
                    updatedItem.status ='confirm';
                    const newUpdate = [updatedItem, ...remaining]
                    setMarked(newUpdate)
               } else{
                alert('not confirm please try again')
               }
        })
        }


        //data sorting optional 
        const handleSort = () => {
            const sortedServices = [...marked];
        
            if (sortOrder === 'asc') {
                sortedServices.sort((a, b) => (a.servicePrice).localeCompare(b.servicePrice));
                setSortOrder('desc');
            } else {
                sortedServices.sort((a, b) => (b.servicePrice).localeCompare(a.servicePrice));
                setSortOrder('asc');
            }
            setMarked(sortedServices);
        };
        


return (

<div>


  <div className="py-10  ">
    <div className="w-full rounded-2xl h-72 relative">
        <img src="https://images.caxton.co.za/wp-content/uploads/sites/2/2023/06/carservicing002_22842-e1687527402737-780x470.jpg" className="w-full h-full  " alt="banner" />
         <div className="absolute bottom-0 bg-[rgba(0,0,0,0.50)] w-full h-full text-left ">
            <h2 className="text-4xl mt-36 ml-20 text-white font-bold">Cart Details</h2>
            <p className="text-red-600 mt-2 ml-20 font-bold">Home - Product Details</p>
         </div>
    </div>
  </div>          

<div className="flex justify-between  p-3 items-center">
    <h3 className="capitalize text-3xl text-black text-left font-bold">total added services : {marked.length}</h3>
    <p onClick={handleSort} className=" text-lg flex items-center  font-bold rounded lg:mr-24">  Filter by  &rarr; 
      <span className="shadow-inner border-2 cursor-pointer bg-slate-100 hover:text-red-600 capitalize text-black  mx-4 p-3"> 
          {sortOrder === 'asc' ? ' low to high ' : ' high to low'} 
    </span> </p>

</div>

 <div className="py-10">
  <table className="table">
   
    <tbody> 
       {
        marked && marked.map(marked=> <MarkedItems key={marked._id} marked={marked} handleDelete={handleDelete} handleUpdate={handleUpdate} > </MarkedItems>)
       }
    </tbody>


    
  </table>
</div>

 </div>
    );
};

export default Markedservices;