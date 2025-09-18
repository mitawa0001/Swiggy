import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import "./style.css";

const RestaurantCard = ({ restaurant }) => {
    const { loggedInUser } = useContext(UserContext);
    const CDN_Link = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    const { info } = restaurant;

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <Link to={`/restaurant/${info.id}`}>
            
                <article className="card1">
                    <img
                        className="card__image"
                        src={CDN_Link + info.cloudinaryImageId}
                        alt={info.name}
                    />
                    <div className="card__data">
                        <div className="card__info">
                            <h2>{info.name}</h2>
                            <p>{info.cuisines.join(", ")}</p>
                        </div>
                        <h3 className="card__price">
                            {info.avgRating} <span className="mx-2">{info.sla.slaString}</span>
                        </h3>
                        <h3 className="card__price">{info.areaName}</h3>
                        <h3>{loggedInUser}</h3>
                    </div>
                </article>
            </Link>
        </div>
    );
};

const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        // Static condition to check if restaurant should be promoted
        const isPromoted = props.restaurant?.info?.avgRatingString <= 4.3
              
        return (
            
            <>
                {isPromoted && (
                    <div className="promoted-label">
                        <span className="promoted-badge">Promoted</span>
                    </div>
                )}
                <RestaurantCard {...props} />
            </>
        )
    }
}   

export default withPromotedLabel(RestaurantCard);  
