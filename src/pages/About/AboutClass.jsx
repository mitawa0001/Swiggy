// Class based componemnt 
import React from "react";
import Layout from "../../components/layout/Layout";

class AboutClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <>
                <h2>this is h2 {this.props.heading}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque facilis eaque fuga dolor
                    a, possimus veniam recusandae vero perspiciatis vitae culpa dignissimos, obcaecati tenetur magni, blanditiis deserunt. R
                    atione, consequatur ut!</p>
            </>
        );
    }
}
export default Layout(AboutClass);