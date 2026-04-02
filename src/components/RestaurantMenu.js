import { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { useParams } from "react-router-dom"; // Import useParams
import { IMG_CDN_URL } from "../utils/constants";
import { Shimmer } from "./Shimmer";
import { mockResMenu } from "../utils/mockData";

export const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  
  // 1. Get the resId from the URL
  const { resId } = useParams();

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

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  // Rest of your data extraction logic remains the same
  const infoCard = restaurantInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = infoCard?.card?.card?.info || {};

  const regularCards =
    restaurantInfo?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards =
    regularCards.find((card) => card?.card?.card?.itemCards)?.card?.card
      ?.itemCards || [];

  return (
    // Inside your return()
<div className="menu">
  {/* Header Section */}
  <header className="restaurant-header">
    <div className="restaurant-header-details">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>{locality}, {sla?.slaString}</p>
    </div>
    <img src={IMG_CDN_URL + cloudinaryImageId} className="restaurant-header-img" alt={name} />
  </header>

  <div className="menu-list">
    {itemCards.map((item) => {
         // Inside your itemCards.map()
const { 
    id, name, price, defaultPrice, description, imageId, itemAttribute, ratings 
} = item?.card?.info;

// Determine if Veg or Non-Veg
const isVeg = itemAttribute?.vegClassifier === "VEG";

return (
  <div key={id} className="menu-item-card">
    <div className="item-info">
      {/* 1. Veg/Non-Veg Tag */}
      <div className={`diet-icon ${isVeg ? "veg" : "non-veg"}`}>
        <div className="dot"></div>
      </div>

      {/* 2. Name and Price */}
      <h2 className="item-name">{name}</h2>
      <span className="item-price">₹{(price || defaultPrice) / 100}</span>

      {/* 3. Star Rating */}
      {ratings?.aggregatedRating?.rating && (
        <div className="item-rating">
          <MdStarRate className="star-icon" />
          <span className="rating-num">
            {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})
          </span>
        </div>
      )}

      {/* 4. Reduced Description (Limited to 2 lines) */}
      <p className="item-description">
        {description ? description : "No description available"}
      </p>
    </div>

    {/* 5. Image and Add Button Container */}
    <div className="item-img-container">
      {imageId && (
        <img src={IMG_CDN_URL + imageId} className="item-img" alt={name} />
      )}
      <button className="add-button">ADD</button>
    </div>
  </div>
   );
  })}
  </div>
</div>
  );
};