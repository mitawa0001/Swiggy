import "./style.css";
import Case1 from "../../assets/44.svg";
import Case4 from "../../assets/11.png";
import Layout from "../layout/Layout";

const CaseStudy = () => {

    
    return (
        <>
            <div className="container">
                <div className="CaseStudywrapper" id="CaseSNew">
                    <div className="CaseSmain">
                        <div className="container2">
                            <img className="Caseimg" src={Case1} alt="Case1study"></img>
                            <div className="overlay1"></div>
                            <div className="button1"><a href="#"> BUTTON </a></div>
                        </div>
                        <div className="Case-Desc">
                            <div className="caseCat">Staffing</div>
                            <h3>Transforming Software Development with Azure DevOps and Ephemeral Environments</h3>
                            <p>Unleash the power of automation and revolutionize your software development process with Azure DevOps and ephemeral environments...</p>
                        </div>
                    </div>
                    <div className="CaseSmain">
                        <div className="container2">
                            <img className="Caseimg" src={Case4} alt="Case1study"></img>
                            <div className="overlay1"></div>
                            <div className="button1"><a href="#"> BUTTON </a></div>
                        </div>
                        <div className="Case-Desc">
                            <div className="caseCat">Staffing</div>
                            <h3>Transforming Software Development with Azure DevOps and Ephemeral Environments</h3>
                            <p>Unleash the power of automation and revolutionize your software development process with Azure DevOps and ephemeral environments...</p>
                        </div>
                    </div>
                    <div className="CaseSmain">
                        <div className="container2">
                            <img className="Caseimg" src={Case4} alt="Case1study"></img>
                            <div className="overlay1"></div>
                            <div className="button1"><a href="#"> BUTTON </a></div>
                        </div>
                        <div className="Case-Desc">
                            <div className="caseCat">Staffing</div>
                            <h3>Transforming Software Development with Azure DevOps and Ephemeral Environments</h3>
                            <p>Unleash the power of automation and revolutionize your software development process with Azure DevOps and ephemeral environments...</p>
                        </div>
                    </div>
                    <div className="CaseSmain">
                        <div className="container2">
                            <img className="Caseimg" src={Case4} alt="Case1study"></img>
                            <div className="overlay1"></div>
                            <div className="button1"><a href="#"> BUTTON </a></div>
                        </div>
                        <div className="Case-Desc">
                            <div className="caseCat">Staffing</div>
                            <h3>Transforming Software Development with Azure DevOps and Ephemeral Environments</h3>
                            <p>Unleash the power of automation and revolutionize your software development process with Azure DevOps and ephemeral environments...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CaseStudy;