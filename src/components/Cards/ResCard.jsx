import { useEffect, useState } from "react";
import "./style.css";
import SimmerUi from "../../utils/SimmerUi";
import FilterBar from "./FilterBar";
import RestaurantGrid from "./RestaurantGrid";
import { useRestaurantData } from "./useRestaurantData";

const ResCard = () => {
    const {
        resData,
        filteredlistResData,
        restoSearch,
        handleFilter,
        handleVegFood,
        handlerestoSearch,
        handleShowAll,
        setRestoSearch
    } = useRestaurantData();

    if (resData.length === 0) {
        return <SimmerUi />;
    }

    return (
        <div className='container'>
            <h3 className="resto-card-head">
                Restaurants with online food delivery in Chandigarh
            </h3>
            
            <FilterBar
                onShowAll={handleShowAll}
                onFilterByRating={handleFilter}
                onFilterByVeg={handleVegFood}
                searchValue={restoSearch}
                onSearchChange={(e) => setRestoSearch(e.target.value)}
                onSearch={handlerestoSearch}
            />
            
            <RestaurantGrid restaurants={filteredlistResData} />
        </div>
    );
};

export default ResCard;
