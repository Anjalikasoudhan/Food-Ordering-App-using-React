import { useState } from "react";
import { Link } from "react-router-dom";
import { Shimmer } from "./ShimmerBody";
import { ResCard } from "./ResCard"; 
import useRestaurants from "../utils/useRestaurants"; // Fixed import name
import { filterTopRated, filterFastDelivery, searchRestaurants } from "../utils/filterHelper";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
    const [searchTxt, setSearchTxt] = useState("");
     const onlineStatus=useOnlineStatus();
    // Ensure these match what your hook returns!
    const { allRestaurants, filteredRestaurants, setFilteredRestaurants } = useRestaurants();                                                                                                 
    if (!allRestaurants || allRestaurants.length === 0) return <Shimmer />;
   
    if(onlineStatus==false){
        return(
           <div className="offline-stats">
            <h1>You are Offline!! .Please get a Good Internet Connection</h1>
           </div>
        );
    }
    return (
        <div className="body">
            <div className="controls">
                <div className="search-wrap">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTxt}
                        onChange={(e) => {
                            const val = e.target.value;
                            setSearchTxt(val);
                            // Filtering logic
                            const searchResult = searchRestaurants(allRestaurants, val);
                            setFilteredRestaurants(searchResult);
                        }}
                    />
                </div>

                <button className="filter-btn" onClick={() => setFilteredRestaurants(allRestaurants)}>
                    All
                </button>
                
                <button className="filter-btn" onClick={() => setFilteredRestaurants(filterTopRated(allRestaurants))}>
                    Top Rated
                </button>

                <button className="filter-btn" onClick={() => setFilteredRestaurants(filterFastDelivery(allRestaurants))}>
                    Fast Delivery
                </button>
            </div>

            <div className="res-container">
                {filteredRestaurants.map((res) => (
                    <Link key={res.info.id} to={"/restaurant/" + res.info.id} style={{textDecoration: "none"}}>
                        <ResCard {...res.info} />
                    </Link>
                ))}
            </div>
        </div>
    );
};