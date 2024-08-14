import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { Component } from "react";

class AboutClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counting: 10,
            name: "naresh",
            negativeCount: 2,
        }
        console.log("Constructor 1");
    }
    componentDidMount() {
        console.log("componment child 2");


    }
    render() {
        const { heading } = this.props;
        const { counting, negativeCount } = this.state;
        console.log("render");

        return (
            <>
                <Container className="my-5">
                    <h2>this is h2 {heading}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque facilis eaque fuga dolor
                        a, possimus veniam recusandae vero perspiciatis vitae culpa dignissimos, obcaecati tenetur magni, blanditiis deserunt. R
                        atione, consequatur ut!</p>
                    <h3>this is  {counting}</h3>
                    <button onClick={() => {
                        this.setState({
                            counting: this.state.counting + 2
                        })
                    }
                    }>count increase</button>
                    <h5>Negative counting - {negativeCount}</h5>
                    <button onClick={() => {
                        this.setState({
                            negativeCount: negativeCount * 2
                        })
                    }

                    }>
                        negative
                    </button>
                </Container >
            </>
        );
    }
}

AboutClass.propTypes = {
    heading: PropTypes.string, // Specify the type of the 'heading' prop
};
export default AboutClass;