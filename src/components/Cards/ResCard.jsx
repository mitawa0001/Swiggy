import { useEffect, useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import SimmerUi from "../../utils/SimmerUi";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';



const ResCard = () => {
    const CDN_Link = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const [resData, setResData] = useState([]);
    const [filteredlistResData, setFilteredlistResData] = useState([]);
    const [restoSearch, setRestoSearch] = useState("");

    const handleFilter = () => {
        const filteredData = resData.filter(
            (res) => res.info.avgRating > 4
        );
        setFilteredlistResData(filteredData);
        console.log(resData)
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

    useEffect(() => {
        ApiFetch();
    }, []);

    const ApiFetch = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page_size=30");
            const json = await response.json();
            const fetchedData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setResData(fetchedData);
            setFilteredlistResData(fetchedData);
            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    return resData.length === 0 ? (
        <SimmerUi />
    ) : (
        <>
            <div className='container'>
                <h3 className="resto-card-head"> Restaurants with online food delivery in Chandigarh</h3>
                <ul className="filter-sort">
                    <li>
                        <Button className="btn resto-filter-btn" onClick={handleShowAll}>
                            All Restaurants
                        </Button>
                    </li>
                    <li>
                        <Button className="btn resto-filter-btn" onClick={handleFilter}>
                            Ratings 4.5+
                        </Button>
                    </li>
                    <li>
                        <Button className="btn resto-filter-btn" onClick={handleVegFood}>
                            Pure Veg
                        </Button>
                    </li>
                    <li>
                        <div className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                value={restoSearch}
                                onChange={(e) => setRestoSearch(e.target.value)}
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit" onClick={handlerestoSearch}>
                                Search
                            </button>
                        </div>
                    </li>
                </ul>
                <div className="all-Boxes" id="Bhoverbox">
                    <div className="Bhoverboxrow">
                        {filteredlistResData.map((item, id) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-5" key={id}>
                                <Link to={"/restaurant/" + item.info.id} >
                                    <article className="card1">
                                        <img className="card__image" src={CDN_Link + item.info.cloudinaryImageId} alt={item.info.name} />
                                        <div className="card__data">
                                            <div className="card__info">
                                                <h2>{item.info.name}</h2>
                                                <p>{item.info.cuisines.join(", ")}</p>
                                            </div>
                                            <h3 className="card__price">{item.info.avgRating} <span className="mx-2">{item.info.sla.slaString}</span></h3>
                                            <h3 className="card__price">{item.info.areaName}</h3>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};


export default ResCard;
