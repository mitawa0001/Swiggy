import { useEffect, useState } from "react";
import { CDN_Link } from "../../utils/mockdata";
import "./style.css";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import SimmerUi from "../../utils/SimmerUi";
import { Search } from "../Search";

const ResCard = ({ ResData }) => {
    const [resData, setResData] = useState([]);

    const handleFilter = () => {
        const filteredData = ResData.filter(
            (res) => res.info.avgRating > 4.5
        );
        setResData(filteredData);
    };

    const handleShowAll = () => {
        setResData(ResData);
    };

    useEffect(() => {
        ApiFetch();
    }, []);

    const ApiFetch = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            setResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };
    return resData.length == 0 ? (
        <SimmerUi />
    )
        : (
            <>
                <div className='container'>
                    <h3 className="resto-card-head"> Restaurants with online food delivery in Chandigarh</h3 >
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
                            <Search />
                        </li>
                    </ul>
                    <div className="all-Boxes" id="Bhoverbox">
                        <div className="Bhoverboxrow">
                            {resData.map((item, id) => (
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-5" key={id}>
                                    <article className="card1">
                                        <img className="card__image" src={CDN_Link + item.info.cloudinaryImageId} alt={item.info.name} />
                                        <div className="card__data">
                                            <div className="card__info">
                                                <h2>{item.info.name}</h2>
                                                <p>{item.info.cuisines.join(", ")}</p>
                                            </div>
                                            <h3 className="card__price">{item.info.avgRating}</h3>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
            </>
        );
};

ResCard.propTypes = {
    ResData: PropTypes.arrayOf(
        PropTypes.shape({
            info: PropTypes.shape({
                name: PropTypes.string.isRequired,
                cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
                cloudinaryImageId: PropTypes.string.isRequired,
                avgRating: PropTypes.number.isRequired,
            }).isRequired,
        })
    ).isRequired,
};

ResCard.defaultProps = {
    ResData: [],
};

export default ResCard;
