import "./utils.css";


const Card = (props) => {
    console.log("this is log", props.KFCdata[0]);
    return (
        <>
            <div className='container'>
                <div className="all-Boxes" id="Bhoverbox">
                    <div className="Bhoverboxrow">
                        {props.KFCdata.map((item, id) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-5" key={id}>
                                <article className="card1">
                                    <img className="card__image" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.info.cloudinaryImageId} />
                                    <div className="card__data">
                                        <div className="card__info">
                                            <h2>{item.info.name}</h2>
                                            <p>{item.info.cuisines.join(", ")}</p>
                                        </div>
                                        <h3 className="card__price">{item.info.cuisines.join(", ")}</h3>
                                        <h3 className="card__price">{item.info.areaName}</h3>
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
export default Card;