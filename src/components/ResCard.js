import {IMG_CDN_URL} from "../utils/constants";
import { MdStarRate } from "react-icons/md";

export const ResCard = ({
  name,
  avgRating,
  cloudinaryImageId,
  cuisines,
  costForTwo,
  sla,
}) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        
        <div className="res-card-meta">
          <div className="rating-tag">
            <MdStarRate />
            <span>{avgRating}</span>
          </div>
          <span className="delivery-time">• {sla?.deliveryTime} mins</span>
        </div>

        <p className="cuisines">{cuisines?.join(", ")}</p>
        <p className="cost">{costForTwo}</p>
      </div>
    </div>
  );
};

