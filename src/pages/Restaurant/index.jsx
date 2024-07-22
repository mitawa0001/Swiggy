import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SimmerUi from "../../utils/SimmerUi";
import "./style.css";
import { useParams } from "react-router-dom";
import { menu_API } from "../../utils/mockdata";
import { CDN_Link } from "../../utils/mockdata";

const Restaurant = () => {
    const [ResInfo, setResInfo] = useState(null);

    const { resid } = useParams();
    console.log(resid);

    useEffect(() => {
        fatchMenu();
    }, [])

    const fatchMenu = async () => {
        const data = await fetch(menu_API + resid);
        const json = await data.json();
        const RestoCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        console.log("This is item info", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
        setResInfo(RestoCards);
    }
    if (ResInfo == null) return <SimmerUi />;
    return (
        <>
            <div className="container my-5">
                {/* <h3 className="fw-bold my-4">{ResInfo.info.name}</h3> */}
                <div className="resmain">
                    {/* <div className="thiEb">
                        <p className="fw-bold">{ResInfo.avgRatingString} ({ResInfo.totalRatingsString}  ratings) <span className="mx-2"> {ResInfo.costForTwo}</span></p>
                        <h5 ><b>Outlet  </b> <span className="mx-2">{ResInfo.areaName}</span></h5>
                        <p >{ResInfo.sla.slaString}</p>
                        <h3 >{ResInfo.sla.lastMileTravelString}</h3>
                    </div> */}
                </div>

                <h3 className="fw-bold my-4">Recommended </h3>
                {
                    ResInfo.itemCards?.map((item, id) => (
                        <div key={id} className="details-main">
                            <div className="">
                                <ul>
                                    <li>{item.card.info.name} - {item.card.info.defaultPrice / 100 || item.card.info.finalPrice / 100 || item.card.info.price / 100}
                                    </li>
                                </ul>
                                <div className="res-details-desc">
                                    {item.card.info.description}
                                </div>
                            </div>
                            <div>
                                <img src={CDN_Link + item.card.info.imageId} height="144px" width="156px"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Layout(Restaurant);