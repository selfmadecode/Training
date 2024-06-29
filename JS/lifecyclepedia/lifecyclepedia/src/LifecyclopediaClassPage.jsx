import React from "react";
import { getRandomUser } from "./Ultility/api"
import Instructor from "./Instructor";

class LifecyclopediaClassPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("state mounting");

        this.state = JSON.parse(localStorage.getItem("cyclopediastate")) || {
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
            inputName: "",
            inputFeedback: ""
        }
    }

    componentDidMount = async () => {
        console.log("did mount");
        if (JSON.parse(localStorage.getItem("cyclopediastate"))) {
            //this.setState(JSON.parse(localStorage.getItem("cyclopediastate")));
        } else {

            let response = await getRandomUser();
            if (response.status == "200") {
                this.setState((prevState) => {
                    return {
                        instructor: {
                            name: response.data.first_name + " " + response.data.last_name,
                            email: response.data.email,
                            phone: response.data.phone_number
                        }
                    }

                })
            }
        }
    }
    componentDidUpdate = async (previousProps, previousState) => {
        console.log("did update");
        localStorage.setItem("cyclopediastate", JSON.stringify(this.state));

        if (previousState.studentCount < this.state.studentCount) {
            const response = await getRandomUser();

            this.setState((prevState) => {
                return {
                    studentList: [
                        ...prevState.studentList, {
                            name: response.data.first_name + " " + response.data.last_name
                        }
                    ]
                }
            })
        }
        else if (previousState.studentCount > this.state.studentCount) {
            this.setState((prevState) => {
                return {
                    studentList: []
                }
            })
        }

    }
    componentWillUnmount() {
        console.log("did unmount");

    }

    handleAddStudent = () => {
        this.setState((prevState) => {
            return {
                studentCount: prevState.studentCount + 1,
            }
        })
    }

    handleRemoveAllStudents = () => {
        this.setState((prevState) => {
            return {
                studentCount: 0,
            }

        })
    }

    handleInstructorToggle = () => {
        this.setState((prevState) => {
            return {
                hideInstructor: !prevState.hideInstructor,
            }

        })
    }
    render() {
        console.log("render component");
        return (
            <div>
                <div className="p-3">
                    <i className={`bi ${this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"} btn btn-success btn-sm`} onClick={this.handleInstructorToggle}></i>
                    <br />
                    {
                        !this.state.hideInstructor && this.state.instructor ? (
                            <Instructor instructor={this.state.instructor} />
                        ) : null
                    }
                </div>

                <div>
                    <span className="h4 text-success">Feedback</span>
                    <br />
                    <input type="text"
                        value={this.state.inputName}
                        placeholder="name..."
                        onChange={(e) => {
                            this.setState({ inputName: e.target.value });
                        }}
                    />
                    <br />
                    <textarea placeholder="Feedback"
                        value={this.state.inputFeedback}
                        onChange={(e) => {
                            this.setState({ inputFeedback: e.target.value });
                        }}
                    ></textarea>
                </div>
                <div className="p-3">
                    <span className="h4 text-success">Students </span>
                    <div>Student count: {this.state.studentCount}</div>
                    <button className="btn btn-success btn-sm" onClick={this.handleAddStudent}>Add Student </button> &nbsp;
                    <button className="btn btn-danger btn-sm" onClick={this.handleRemoveAllStudents}>Remove All Student </button>

                    {
                        this.state.studentList.map((student, index) => {
                            return (
                                <div className="text-black" key={index}>
                                    - {student.name}
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        )
    }
}

export default LifecyclopediaClassPage;