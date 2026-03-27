import { useEffect, useState } from "react";
import { IMG_CDN_URL, SWIGGY_API_URL } from "../utils/constants";
import { Shimmer } from "./Shimmer";

 export const Body=()=>{
    const [allRestaurants,setAllRestaurants]=useState([]);
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);
    useEffect(()=>{
    fetchData();
    },[]);

    const fetchData= async()=>{
        try{
            
            const data=await fetch(SWIGGY_API_URL);
            const json=await data.json();
            const mainCard=json?.data?.cards.find((c)=> c?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            const resData=mainCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(resData);
            setAllRestaurants(resData);//update the state
            setFilteredRestaurants(resData);
            console.log("Found Restaurants:", resData?.length); 
        }catch(err){
            console.error("Failed to ftech:",err);
        }
    };
    if(allRestaurants.length==0){
       
        return <Shimmer />
    }
  
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn "
                  onClick={()=>{
                    const filteredList=allRestaurants.filter((res)=>res.info.avgRating>4.4);
                    setFilteredRestaurants(filteredList);
                  }}
                >
                Top Rated Restaurants
                </button>


                <button className="filter-btn secondary"
                 onClick={()=>setFilteredRestaurants(allRestaurants)}
                >Show All </button>
                 
            </div>
        <div className="res-container">
            {/*Accessing index 0 manually 
            <ResCard name={resList[0].info.name}
            rating={resList[0].info.avgRating}/>
            <ResCard name={resList[1].info.name}
              rating={resList[1].info.avgRating}/>*/}
         {filteredRestaurants?.map((res)=>(
            <ResCard
            key={res.info.id}{...res.info}/>
         ))}
        </div>
        </div>
    );
};

 const ResCard=({name,avgRating,cloudinaryImageId,cuisines,costForTwo})=>{
    return(
        <div className="res-card">
            <img className="res-img"
                 src={IMG_CDN_URL+cloudinaryImageId}
                 alt={name}
                 />
          <div className="res-card-content">
            <h3>{name}</h3>
            <h4 className="rating-tag"> ⭐{avgRating}</h4>
            <p className="cuisines">{cuisines?.join(",")}</p>
            <p className="cost">{costForTwo}</p>
            </div>
        </div>
    );
};