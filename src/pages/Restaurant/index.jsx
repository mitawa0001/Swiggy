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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const RestoCards = json?.data?.cards[4]?.card?.card?.info;
        console.log(json?.data);
        setResInfo(RestoCards);
    }

    return ResInfo == null ? (<SimmerUi />) : (
        <>
            <div className="container my-5">
                <h3 className="fw-bold my-4">{ResInfo.name}</h3>
                <div className="resmain">
                    <div className="thiEb">
                        <p className="fw-bold">{ResInfo.avgRatingString} ({ResInfo.totalRatingsString}  ratings) <span className="mx-2"> {ResInfo.costForTwo}</span></p>
                        <h5 ><b>Outlet  </b> <span className="mx-2">{ResInfo.areaName}</span></h5>
                        <p >{ResInfo.sla.slaString}</p>
                        <h3 >{ResInfo.sla.lastMileTravelString}</h3>
                    </div>
                </div>

                <h3 className="fw-bold my-4">Recommended </h3>

            </div>
        </>
    )
}
export default Layout(Restaurant);