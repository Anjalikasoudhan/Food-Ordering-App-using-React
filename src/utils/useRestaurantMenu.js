import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockResMenu } from "../utils/mockData";
const useRestaurantMenu=(resId)=>{
       const [restaurantInfo, setRestaurantInfo] = useState(null);
        
       
      
        useEffect(() => {
          // simulate API delay
          const timer = setTimeout(() => {
            // 2. Access the specific restaurant data using the ID from params
            // We use mockResMenu[resId] to pick the right data
            const specificResData = mockResMenu[resId];
            
            if (specificResData) {
              setRestaurantInfo(specificResData.data);
            } else {
              // Fallback if ID is not in your mock object
              setRestaurantInfo(null); 
            }
          }, 500);
      
          return () => clearTimeout(timer);
        }, [resId]); // Re-run if ID changes
      


    return restaurantInfo;
}

export default  useRestaurantMenu;