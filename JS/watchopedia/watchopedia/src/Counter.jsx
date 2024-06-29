import { useState } from "react";

const Counter = () => {

    const [counterState, setCounter] = useState(() => {
        return { counter: 0, title: "Fun" };
    });

    const [titleState, changeTitle] = useState("App");

    function incrementCounter() {
        setCounter((prevState) => {
            //return { counter: prevState.counter + 1 }; // if we do this, use state will complete replace the state with what we have, therefore title will not exist anymore
            return { ...prevState, counter: prevState.counter + 1 }; // we destructure to get the previous state and modify what we need
        });
    };

    function decrementCounter() {
        setCounter((prevState) => {
            return { ...prevState, counter: prevState.counter - 1 };
        });
    };

    return (
        <div className="col-12 col-md-4 offset-md-4 border text-white text-center">
            <span className="h2 pt-4 m-2 text-white-50"> {counterState.title} Counter {titleState}</span>
            <br />
            <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
            <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
            <br />
            <span className="h4">
                Counter: &nbsp;
                <span className="text-success">{counterState.counter}</span>
            </span>

        </div>
    )

}

export default Counter;