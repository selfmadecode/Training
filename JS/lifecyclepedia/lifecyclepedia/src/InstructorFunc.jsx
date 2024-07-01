import React, { useEffect } from "react";

const InstructorFunc = (props) => {

    useEffect(() => {
        return () => {
            console.log("This will be called when component will unmount - Instructor"); // componentWillUnmount
        };
    }, []);

    return (
        <div className="">
            <span className="h4 text-success">Instructor: </span>
            Name: {props.instructor.name}
            <br />
            Email: {props.instructor.email}
            <br />
            Phone: {props.instructor.phone}
        </div>)
}


export default InstructorFunc;