import React from "react";
class Counter extends React.Component { // class component, best practice: use functional component instead, functional componenets do no have constructor, however you can set state using hooks in functional component

    constructor(props) {
        super(props);

        // in jsx, you have to bind event and handlers so that they will not be undefined
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        // if you don not want to worry about this, you can use arrow function as done in handleRandom

        this.state = { // you cannot directly modify the state, state is immutable
            points: 0,
            lastPlay: "",
            gameWinner: ""
        }
    }

    handleAttack() {
        //alert("Attacking...");
        //this.state.points +1; //error: you cannot directly modify the state, state is immutable
        // to modify a state you used methods
        // this.setState({
        //     points: this.state.points +1,
        // })
        this.setState((previousState) => {
            let newScore = previousState.points + Math.round(Math.random() * 10);
            let winner = this.handleWinGame(newScore);
            return {
                points: newScore,
                lastPlay: "Attack",
                gameWinner: winner
            }
        });
    }

    handleDefence() {
        //alert("Defending...");
        // this.setState({
        //     points: this.state.points -1,
        // })
        this.setState((previousState) => {
            let newScore = previousState.points - Math.round(Math.random() * 10);
            let winner = this.handleWinGame(newScore);

            return {
                points: newScore,
                lastPlay: "Defend",
                gameWinner: winner
            }
        });
    }

    handleRandom = () => {
        this.setState((previousState) => {
            let playMode = Math.round(Math.random());
            if (playMode == 0) {
                this.handleAttack();
            } else {
                this.handleDefence();
            }
        });
    }

    handleResest = () => {
        this.setState({ points: 0, lastPlay: "", gameWinner: "" })
    }

    handleWinGame = (point) => {
        let winner = "";
        if (point >= 10) {
            winner = `Attacker wins by : ${point} points`;
            this.setState({ points: 0 })
        }
        if (point <= -10) {
            winner = `Defender wins by : ${point} points`;
            this.setState({ points: 0 })
        }

        return winner;
    }

    // handleDefenseWinGame = (point) => {
    //     let winner = "";
    //     if (point <= -10) {
    //         alert("Defender wins");
    //     }
    // }

    render() {

        return (
            <div className="row text-black">
                <h1>Counter: {this.state.points}</h1>
                <p>Winner: {this.state.gameWinner} </p>
                <p>Last play: {this.state.lastPlay} </p>
                <button onClick={this.handleAttack} style={{ width: "200px", height: "200px", cursor: "pointer" }}> Attack </button>
                <button onClick={this.handleDefence} style={{ width: "200px", height: "200px", cursor: "pointer" }}> Defend </button>


                <div>
                    <br />
                    <button onClick={this.handleRandom}>Random Play</button>
                    <button onClick={this.handleResest}>Reset</button>

                </div>

            </div>
        )
    }
}

export default Counter;