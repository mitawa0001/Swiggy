import { useEffect, useState } from "react";
import { CDN_Link } from "../../utils/mockdata";
import "./style.css";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const ResCard = (props) => {
    const [resData, setResData] = useState(props.ResData)



    const handleFilter = () => {
        const filteredData = props.ResData.filter(
            (res) => res.info.avgRating > 4.5
        );
        setResData(filteredData);
    }
    useEffect(() => {
        ApiFatch();
    }, []);

    const ApiFatch = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();

        setResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log("this is Swiggy Api",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        // setResData(json)
    }

    console.log("this is log", props.ResData[0]);
    return (
        <>
            <div className="text-center w-100 my-3">
                <Button className="btn-primary btn"
                    onClick={handleFilter}
                >Top Restorent</Button >
                <Button className="btn-primary btn"
                    onClick={() => {
                        setResData(props.ResData)
                    }}
                >All Restorent</Button >
            </div >
            <div className='container'>
                <div className="all-Boxes" id="Bhoverbox">
                    <div className="Bhoverboxrow">
                        {resData.map((item, id) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-5" key={id}>
                                <article className="card1">
                                    <img className="card__image" src={CDN_Link + item.info.cloudinaryImageId} />
                                    <div className="card__data">
                                        <div className="card__info">
                                            <h2>{item.info.name}</h2>
                                            <p>{item.info.cuisines.join(", ")}</p>
                                        </div>
                                        <h3 className="card__price">{item.info.cuisines.join(", ")}</h3>
                                        <h3 className="card__price">{item.info.avgRating}</h3>
                                        {/* <button className="card__add">+</button> */}
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResCard;

ResCard.propTypes = {
    ResData: PropTypes.number.isRequired
}
ResCard.defaultProps = {
    ResData: PropTypes.text
};
