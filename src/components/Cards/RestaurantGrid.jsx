import RestaurantCard from "./RestaurantCard";
import "./style.css";

const RestaurantGrid = ({ restaurants }) => {
    return (
        <div className="all-Boxes" id="Bhoverbox">
            <div className="Bhoverboxrow">
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard 
                        key={restaurant.info.id || index} 
                        restaurant={restaurant} 
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantGrid;
