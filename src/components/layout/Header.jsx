import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import Swiggy from "../../assets/sw.svg";
import { useState, useContext } from 'react';
import UserContext from '../../utils/UserContext';

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const { loggedInUser } = useContext(UserContext);

    const handleLoginBtn = () => {
        setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
    };

    return (
        <>
            <Navbar expand="lg" className="navbar sticky-top bg-light">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Swiggy} alt="Swiggy Logo" width="100%" height="100%" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/casestudy">Case Study</Nav.Link>
                            <Nav.Link as={Link} to="/restaurant/resid">Restaurant</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="d-flex align-items-center">
                        <button
                            className="btn btn-primary me-2"
                            type="button"
                            onClick={handleLoginBtn}
                        >
                            {loginBtn}
                        </button>
                        <span className="navbar-text">
                            {loggedInUser || "Guest"}
                        </span>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
