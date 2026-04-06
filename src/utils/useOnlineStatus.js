import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    //check if online or not 
    const [onlineStatus,setOnlineStatus]=useState(true);
     useEffect(()=>{
       window.addEventListener("online",()=>{
           setOnlineStatus(true);
       });
       window.addEventListener("offline",()=>{
           setOnlineStatus(false);
       });
     },[]);
    //boolean value
     return onlineStatus;
};

export default useOnlineStatus;