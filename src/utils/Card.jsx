import CardIcon1 from "../assets/Improved Data Quality and Integrity.webp";
import "./utils.css";

const Card = (props) => {
    return (
        <>
            <div className='container'>
                <div className="all-Boxes" id="Bhoverbox">
                    <div className="Bhoverboxrow">
                        <div className="BhoverboxrowMain">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{props.name}</h3>
                                    <span className='IconHoverRapper'>
                                        <img className='IconHoverImg' src={CardIcon1} alt='Cardimg'></img></span>
                                    <p className="card-text">
                                        <ul>
                                            <li>{props.Deaitls}</li>
                                            <li>Routers.</li>
                                            <li>Wireless access points.</li>
                                            <li>Modems.</li>
                                            <li>Hubs.</li>
                                            <li>Servers.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="BhoverboxrowMain">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{props.name}</h3>
                                    <span className='IconHoverRapper'>
                                        <img className='IconHoverImg' src={CardIcon1} alt='Cardimg'></img></span>
                                    <p className="card-text">
                                        <ul>
                                        <li>{props.Deaitls}</li>
                                            <li>Custom and OOTB ESBs/message brokers.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" BhoverboxrowMain">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{props.name}</h3>
                                    <span className='IconHoverRapper'>
                                        <img className='IconHoverImg' src={CardIcon1} alt='Cardimg'></img></span>
                                    <p className="card-text">
                                        <ul>
                                        <li>{props.Deaitls}</li>
                                            <li>Laptops.</li>
                                            <li>Mobile devices, tablets.</li>
                                            <li>IoT devices.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" BhoverboxrowMain">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{props.name}</h3>
                                    <span className='IconHoverRapper'>
                                        <img className='IconHoverImg' src={CardIcon1} alt='Cardimg'></img></span>
                                    <p className="card-text">
                                        <ul>
                                        <li>{props.Deaitls}</li>

                                            <li>Custom and OOTB ESBs/message brokers.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" BhoverboxrowMain"
                        >
                            <div className="card">
                                <div className="card-body">
                                    <h3>{props.name}</h3>
                                    <span className='IconHoverRapper'>
                                        <img className='IconHoverImg' src={CardIcon1} alt='Cardimg'></img></span>
                                    <p className="card-text">
                                        <ul>
                                        <li>{props.Deaitls}</li>

                                            <li>Routers.</li>
                                            <li>Wireless access points.</li>
                                            <li>Modems.</li>
                                            <li>Hubs.</li>
                                            <li>Servers.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;