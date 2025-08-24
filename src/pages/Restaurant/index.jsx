import React, { useEffect, useState, useContext } from "react";
import Layout from "../../components/layout/Layout";
import SimmerUi from "../../utils/SimmerUi";
import "./style.css";
import { useParams } from "react-router-dom";
import { CDN_Link } from "../../utils/mockdata";
import useRestrauntMenu from "../../utils/useRestroMenu";
import UserContext from "../../utils/UserContext";

const Restaurant = () => {
    const { userGender } = useContext(UserContext)
    const { resid } = useParams();
    const resInfo = useRestrauntMenu(resid);  // Fetching restaurant menu info from custom hook
    
    // Handle loading state
    if (!resInfo) return <SimmerUi />;

    const itemcards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemcards);
    return (
        <div className="container my-5">
            {/* Restaurant details section */}
            {/* <h3 className="fw-bold my-4">{resInfo.info.name}</h3> */}
            <div className="resmain">
                {/* <div className="thiEb">
                    <p className="fw-bold">{resInfo.avgRatingString} ({resInfo.totalRatingsString} ratings)
                        <span className="mx-2">{resInfo.costForTwo}</span></p>
                    <h5><b>Outlet</b> <span className="mx-2">{resInfo.areaName}</span></h5>
                    <p>{resInfo.sla.slaString}</p>
                    <h3>{resInfo.sla.lastMileTravelString}</h3>
                </div> */}
            </div>

            <h3 className="fw-bold my-4">Recommended</h3>
            <h4>{userGender}</h4>
            {itemcards?.itemCards?.map((item, id) => (
                <div key={id} className="details-main">
                    <div>
                        <ul>
                            <li>{item.card.info.name} - {(item.card.info.defaultPrice || item.card.info.finalPrice || item.card.info.price) / 100}</li>
                        </ul>
                        <div className="res-details-desc">
                            {item.card.info.description}
                        </div>
                    </div>
                    <div>
                        <img src={CDN_Link + item.card.info.imageId} height="144px" width="156px" alt={item.card.info.name} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Restaurant;
