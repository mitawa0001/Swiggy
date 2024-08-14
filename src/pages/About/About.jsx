import { Container } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import PropTypes from "prop-types";
import AboutClass from "./AboutClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props)

        console.log("Constructor parent");
    }
    render() {
        console.log("render parent");

        return (
            <Container className="my-5">
                <h2>About main</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis eaque fuga dolor
                    a, possimus veniam recusandae vero perspiciatis vitae culpa dignissimos, obcaecati tenetur magni, blanditiis deserunt.
                    Ratione, consequatur ut!
                </p>
                <AboutClass heading=" child 1" />
                <AboutClass heading=" child 2" />
            </Container>
        )
    }
}

About.propTypes = {
    heading: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
};

export default Layout(About);
