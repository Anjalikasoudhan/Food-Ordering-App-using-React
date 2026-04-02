import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import { Shimmer } from "./Shimmer";

// 1. Import the specific constant from your mockData.js
import { mockRestaurants } from "../utils/mockData"; 

export const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");

    useEffect(() => {
        // 2. Simply call the function to load the local data
        loadLocalData();
    }, []);

    const loadLocalData = () => {
        // 3. Use resList instead of the fetch 'json'
        const mainCard = mockRestaurants?.data?.cards.find(
            (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        
        const resData = mainCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setAllRestaurants(resData || []);
        setFilteredRestaurants(resData || []);
    };

    if (allRestaurants.length === 0) return <Shimmer />;

    return (
        <div className="body">
            {/* ... rest of your search and filter UI code remains exactly the same ... */}
            <div className="res-container">
                {filteredRestaurants.map((res) => (
                    <Link
                        key={res.info.id}
                        to={"/restaurant/" + res.info.id}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <ResCard {...res.info} />
                    </Link>
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