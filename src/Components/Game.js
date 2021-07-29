import React from 'react'
import './Game.css';

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            player: "red",
            squares: ["white", "white", "white", "white", "white", "white", "white", "white", "white"],
        }
    }
    changeSquareColor =(id)=> {
        console.log (this.state.squares)
        let tempSquare = [...this.state.squares]
        if (this.state.player === "red") {
            tempSquare.splice(id, 1, "red")
            this.setState(prevState => {
                return {
                    ...prevState,
                    player: "blue",
                    squares: [...tempSquare],
                }
            })
        }
        if (this.state.player === "blue") {
            tempSquare.splice(id, 1, "blue")
            this.setState(prevState => {
                return {
                    ...prevState,
                    player: "red",
                    squares: [...tempSquare],
                }
            })
        }
        this.victoryCondition()
    }
    victoryCondition() {
        if (this.state.squares[0] === "blue" && this.state.squares[1] === "blue" && this.state.squares[2] === "blue") {
            alert("Blue player wins")
            this.reset()
        } else
        if (this.state.squares[3] === "blue" && this.state.squares[4] === "blue" && this.state.squares[5] === "blue") {
            alert("Blue player wins")
            this.reset()
        } else
        if (this.state.squares[6] === "blue" && this.state.squares[7] === "blue" && this.state.squares[8] === "blue") {
            alert("Blue player wins")
            this.reset()
        } else
        if (this.state.squares[0] === "blue" && this.state.squares[3] === "blue" && this.state.squares[6] === "blue") {
            alert("Blue player wins")
            this.reset()
        } else
        if (this.state.squares[1] === "blue" && this.state.squares[4] === "blue" && this.state.squares[7] === "blue") {
            alert("Blue player wins")
            this.reset()
        } else
        if (this.state.squares[2] === "blue" && this.state.squares[5] === "blue" && this.state.squares[8] === "blue") {
            alert("Blue player wins")
            this.reset()
        } else
        if (this.state.squares[0] === "blue" && this.state.squares[4] === "blue" && this.state.squares[8] === "blue") {
            alert("Blue player wins")
            this.reset()
        } else
        if (this.state.squares[2] === "blue" && this.state.squares[4] === "blue" && this.state.squares[6] === "blue")  {
            alert("Blue player wins")
            this.reset()
        } else
        if (this.state.squares[0] === "red" && this.state.squares[1] === "red" && this.state.squares[2] === "red") {
            alert("Red player wins")
            this.reset()
        } else
        if (this.state.squares[3] === "red" && this.state.squares[4] === "red" && this.state.squares[5] === "red") {
            alert("Red player wins")
            this.reset()
        } else
        if (this.state.squares[6] === "red" && this.state.squares[7] === "red" && this.state.squares[8] === "red") {
            alert("Red player wins")
            this.reset()
        } else
        if (this.state.squares[0] === "red" && this.state.squares[3] === "red" && this.state.squares[6] === "red") {
            alert("Red player wins")
            this.reset()
        } else
        if(this.state.squares[1] === "red" && this.state.squares[4] === "red" && this.state.squares[7] === "red") {
            alert("Red player wins")
            this.reset()
        } else
        if (this.state.squares[2] === "red" && this.state.squares[5] === "red" && this.state.squares[8] === "red") {
            alert("Red player wins")
            this.reset()
        } else
        if (this.state.squares[0] === "red" && this.state.squares[4] === "red" && this.state.squares[8] === "red") {
            alert("Red player wins")
            this.reset()
        } else
        if (this.state.squares[2] === "red" && this.state.squares[4] === "red" && this.state.squares[6] === "red")  {
            alert("Red player wins")
            this.reset()
        } 
    }
    reset =()=> {
        this.setState(prevState => {
            return {
                ...prevState,
                player: "red",
                squares: ["white", "white", "white", "white", "white", "white", "white", "white", "white"],
            }
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <button disabled={this.state.squares[0] === "white" ? false : true} className={this.state.squares[0]} onClick={() => this.changeSquareColor(0)}></button>
                        <button disabled={this.state.squares[1] === "white" ? false : true} className={this.state.squares[1]} onClick={() => this.changeSquareColor(1)}></button>
                        <button disabled={this.state.squares[2] === "white" ? false : true} className={this.state.squares[2]} onClick={() => this.changeSquareColor(2)}></button>
                    </div>
                    <div className="row">
                        <button disabled={this.state.squares[3] === "white" ? false : true} className={this.state.squares[3]} onClick={() => this.changeSquareColor(3)}></button>
                        <button disabled={this.state.squares[4] === "white" ? false : true} className={this.state.squares[4]} onClick={() => this.changeSquareColor(4)}></button>
                        <button disabled={this.state.squares[5] === "white" ? false : true} className={this.state.squares[5]} onClick={() => this.changeSquareColor(5)}></button>
                    </div>
                    <div className="row">
                        <button disabled={this.state.squares[6] === "white" ? false : true} className={this.state.squares[6]} onClick={() => this.changeSquareColor(6)}></button>
                        <button disabled={this.state.squares[7] === "white" ? false : true} className={this.state.squares[7]} onClick={() => this.changeSquareColor(7)}></button>
                        <button disabled={this.state.squares[8] === "white" ? false : true} className={this.state.squares[8]} onClick={() => this.changeSquareColor(8)}></button>
                    </div>
                </div>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}