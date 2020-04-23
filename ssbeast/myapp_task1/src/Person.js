import React, {
    Component
} from "react";
import "./Person.css";

class Person extends Component {
    render() {
        return ( <
            div className = "Person" >
            <
            h3 > {
                this.props.name
            } < /h3> <
            p > {
                this.props.about
            } < /p> <
            /div>
        );
    }
}

export default Person;
