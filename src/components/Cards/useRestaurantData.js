import { useState, useEffect } from "react";

export const useRestaurantData = () => {
    const [resData, setResData] = useState([]);
    const [filteredlistResData, setFilteredlistResData] = useState([]);
    const [restoSearch, setRestoSearch] = useState("");

    console.log("resDataaaaaaaaaaa", resData);


    const handleFilter = () => {
        const filteredData = resData.filter(
            (res) => res.info.avgRating > 4
        );
        setFilteredlistResData(filteredData);
    };

    const handleVegFood = () => {
        const VegFood = resData.filter(
            (res) => res.info.veg === true
        );
        setFilteredlistResData(VegFood);
    };

    const handlerestoSearch = () => {
        const SearchFilter = resData.filter(
            (res) => res.info.name.toLowerCase().includes(restoSearch.toLowerCase())
        );
        setFilteredlistResData(SearchFilter);
    };

    const handleShowAll = () => {
        setFilteredlistResData(resData);
    };

    const ApiFetch = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7026275&lng=76.7134503&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            const fetchedData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setResData(fetchedData);
            console.log('fetchedData', json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);

            setFilteredlistResData(fetchedData);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    useEffect(() => {
        ApiFetch();
    }, []);

    return {
        resData,
        filteredlistResData,
        restoSearch,
        handleFilter,
        handleVegFood,
        handlerestoSearch,
        handleShowAll,
        setRestoSearch
    };
};
