import { useState, useEffect } from "react";
import { mockRestaurants } from "./mockData";

const useRestaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        const mainCard = mockRestaurants?.data?.cards.find(
            (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        const resData = mainCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        setAllRestaurants(resData);
        const savedData=localStorage.getItem("lastViewedRestaurants");
        setFilteredRestaurants(resData);

    }, []);

    // We return the data and the setter for filtered list
    return { 
        allRestaurants, 
        filteredRestaurants, 
        setFilteredRestaurants 
    };
};

export default useRestaurants;