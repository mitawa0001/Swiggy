import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import Swiggy from "../../assets/sw.svg";
import { useEffect, useState } from 'react';

const Header = () => {
    const [loginbtn, setloginbtn] = useState("Login");

    const handleLoginbtn = () => {
        loginbtn == "Login" ? setloginbtn("Logout") : setloginbtn("Login")
    };
    console.log(loginbtn);

    useEffect(() => {
        console.log("use effect");
    }, [])
    return (
        <>
            <Navbar expand="lg" className="navbar sticky-top navbar-expand-lg bg-light">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/"><img src={Swiggy} alt='logo' width="100%" height="100%" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/casestudy">CaseStudy</Nav.Link>
                            <Nav.Link as={Link} to="/restaurant/resid">Restaurant</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <form className="d-flex">
                        <button className='btn btn-primary' type="button" onClick={handleLoginbtn}>{loginbtn}</button>
                    </form>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Header;
