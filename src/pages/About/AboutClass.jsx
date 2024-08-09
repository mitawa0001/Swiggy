// Class based componemnt 
import React from "react";
import Layout from "../../components/layout/Layout";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types"; 

class AboutClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);


        this.state = {
            counting: 10,
            name: "naresh",
        }
    }
    render() {
        const { heading } = this.props;
        const { counting, name } = this.state;
        return (
            <>
                <Container className="my-5">
                    <h2>this is h2 {heading}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque facilis eaque fuga dolor
                        a, possimus veniam recusandae vero perspiciatis vitae culpa dignissimos, obcaecati tenetur magni, blanditiis deserunt. R
                        atione, consequatur ut!</p>
                    <h3>this is {counting}</h3>
                    <h4>this is {name}</h4>
                </Container>
            </>
        );
    }
}

AboutClass.propTypes = {
    heading: PropTypes.string, // Specify the type of the 'heading' prop
};
export default Layout(AboutClass);