import React, { useEffect, useState } from "react";
import { getRandomUser } from "./Ultility/api"
import Instructor from "./Instructor";
import InstructorFunc from "./InstructorFunc"

const LifecyclopediaClassFuncPage = () => {
    // constructor(props) {
    //     super(props);
    //     console.log("state mounting");

    //     this.state = JSON.parse(localStorage.getItem("cyclopediastate")) || {
    //         instructor: undefined,
    //         studentList: [],
    //         studentCount: 0,
    //         hideInstructor: false,
    //         inputName: "",
    //         inputFeedback: ""
    //     }
    // }

    const [state, setDefaultState] = useState(() => {

        return {
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
        }
    });

    const [inputName, setInputName] = useState(() => {
        return "";
    });

    const [inputFeedback, setInputFeedback] = useState(() => {
        return "";
    });

    const [studentList, addStudent] = useState(() => {
        return ["James", "John"];
    });

    const handleAddStudent = () => {
        setDefaultState((prevState) => {
            return {
                ...prevState,
                studentCount: prevState.studentCount + 1,
            }
        })
    }

    const handleRemoveAllStudents = () => {
        setDefaultState((prevState) => {
            return {
                ...prevState,
                studentCount: 0,
            }

        })
    }

    const handleInstructorToggle = () => {
        setDefaultState((prevState) => {
            return {
                ...prevState,
                hideInstructor: !prevState.hideInstructor,
            }

        })
    }

    // functional components have useEffect as it's life cycle method
    useEffect(() => {
        console.log("This will be called on every render");
    });

    useEffect(() => {
        console.log("This will be called on intial/first render/mount"); // componentDidMount

        const getUser = async () => {
            const response = await getRandomUser();
            setDefaultState((prevState) => {
                return {
                    ...prevState,
                    instructor: {
                        name: response.data.first_name + " " + response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number
                    }
                }
            })
        };
        if (!state.hideInstructor) {
            getUser();
        }
    }, [state.hideInstructor]);

    useEffect(() => {

        const getUser = async () => {
            const response = await getRandomUser();
            setDefaultState((prevState) => {
                return {
                    ...prevState,
                    studentList: [
                        ...prevState.studentList, {
                            name: response.data.first_name + " " + response.data.last_name
                        }
                    ]
                }
            })
        };
        if (state.studentList.length < state.studentCount) {
            getUser();
        } else if (state.studentList.length > state.studentCount) {
            setDefaultState((prevState) => {
                return { ...prevState, studentList: [] }
            })
        }
    }, [state.studentCount]);

    useEffect(() => {
        console.log("This will be called where the value of inputfeedback changes"); // componentDidUpdate
    }, [inputFeedback]);

    useEffect(() => {
        return () => {
            console.log("This will be called when component will unmount"); // componentWillUnmount
        };
    }, []);


    return (
        <div>
            <div className="p-3">
                <i className={`bi ${state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"} btn btn-success btn-sm`} onClick={handleInstructorToggle}></i>
                <br />
                {
                    !state.hideInstructor && state.instructor ? (
                        <InstructorFunc instructor={state.instructor} />
                    ) : null
                }
            </div>

            <div>
                <span className="h4 text-success">Feedback</span>
                <br />
                <input type="text"
                    value={inputName}
                    placeholder="name..."
                    onChange={(e) => {
                        setInputName(e.target.value);
                    }}
                />
                <p>{inputName}</p>
                <br />
                <textarea placeholder="Feedback"
                    value={inputFeedback}
                    onChange={(e) => {
                        setInputFeedback(e.target.value);
                    }}
                ></textarea><p>{inputFeedback}</p>
            </div>
            <div className="p-3">
                <span className="h4 text-success">Students </span>
                <div>Student count: {state.studentCount}</div>
                <button className="btn btn-success btn-sm" onClick={handleAddStudent}>Add Student </button> &nbsp;
                <button className="btn btn-danger btn-sm" onClick={handleRemoveAllStudents}>Remove All Student </button>

                {
                    state.studentList.map((student, index) => {
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

export default LifecyclopediaClassFuncPage;