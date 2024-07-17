import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SimmerUi from "../../utils/SimmerUi";
import "./style.css";

const Restaurant = () => {
    const [ResInfo, setResInfo] = useState(null);

    useEffect(() => {
        fatchMenu();
    }, [])

    const fatchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7046486&lng=76.71787259999999&restaurantId=50790&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        const RestoCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        console.log("this is card info", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
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
                <ul>
                    {
                        ResInfo.itemCards?.map((item, index) => (
                            <li key={index}>{item.card.info.name}</li>
                        ))
                    }
                    {/* <li>{ResInfo.itemCards[0].card.info.name}</li>
                    <li>{ResInfo.itemCards[1].card.info.name}</li>
                    <li>{ResInfo.itemCards[2].card.info.name}</li>
                    <li>{ResInfo.itemCards[3].card.info.name}</li> */}
                </ul>
            </div>
        </>
    )
}
export default Layout(Restaurant);