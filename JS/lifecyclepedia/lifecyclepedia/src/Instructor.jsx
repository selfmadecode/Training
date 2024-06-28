import React from "react";

class Instructor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("instructor did mount");
    }

    componentDidUpdate() {
        console.log("instructor did update");

    }

    componentWillUnmount() {
        console.log("instructor will unmount");

    }


    render() {
        return (
            <div className="">
                <span className="h4 text-success">Instructor: </span>
                Name: {this.props.instructor.name}
                <br />
                Email: {this.props.instructor.email}
                <br />
                Phone: {this.props.instructor.phone}
            </div>)
    }
}

export default Instructor;