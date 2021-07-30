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
        let tempSquare = [...this.state.squares]
        if (this.state.player === "red") {
            tempSquare.splice(id, 1, "red")
            this.setState(prevState => {
                return {
                    ...prevState,
                    player: "blue",
                    squares: [...tempSquare],
                }
            }, ()=>this.victoryConditions())
        }
        if (this.state.player === "blue") {
            tempSquare.splice(id, 1, "blue")
            this.setState(prevState => {
                return {
                    ...prevState,
                    player: "red",
                    squares: [...tempSquare],
                }
            }, ()=>this.victoryConditions())
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
    gameOver =()=> {
        this.setState(prevState => {
            return {
                ...prevState,
                player: "gameOver",
            }
        })
    }
    victoryConditions =()=> {
        if (this.state.squares[0] === "blue" && this.state.squares[1] === "blue" && this.state.squares[2] === "blue") {
            this.gameOver()
        } else
        if (this.state.squares[3] === "blue" && this.state.squares[4] === "blue" && this.state.squares[5] === "blue") {
            this.gameOver()
        } else
        if (this.state.squares[6] === "blue" && this.state.squares[7] === "blue" && this.state.squares[8] === "blue") {
            this.gameOver()
        } else
        if (this.state.squares[0] === "blue" && this.state.squares[3] === "blue" && this.state.squares[6] === "blue") {
            this.gameOver()
        } else
        if (this.state.squares[1] === "blue" && this.state.squares[4] === "blue" && this.state.squares[7] === "blue") {
            this.gameOver()
        } else
        if (this.state.squares[2] === "blue" && this.state.squares[5] === "blue" && this.state.squares[8] === "blue") {
            this.gameOver()
        } else
        if (this.state.squares[0] === "blue" && this.state.squares[4] === "blue" && this.state.squares[8] === "blue") {
            this.gameOver()
        } else
        if (this.state.squares[2] === "blue" && this.state.squares[4] === "blue" && this.state.squares[6] === "blue")  {
            this.gameOver()
        } else
        if (this.state.squares[0] === "red" && this.state.squares[1] === "red" && this.state.squares[2] === "red") {
            this.gameOver()
        } else
        if (this.state.squares[3] === "red" && this.state.squares[4] === "red" && this.state.squares[5] === "red") {
            this.gameOver()
        } else
        if (this.state.squares[6] === "red" && this.state.squares[7] === "red" && this.state.squares[8] === "red") {
            this.gameOver()
        } else
        if (this.state.squares[0] === "red" && this.state.squares[3] === "red" && this.state.squares[6] === "red") {
            this.gameOver()
        } else
        if(this.state.squares[1] === "red" && this.state.squares[4] === "red" && this.state.squares[7] === "red") {
            this.gameOver()
        } else
        if (this.state.squares[2] === "red" && this.state.squares[5] === "red" && this.state.squares[8] === "red") {
            this.gameOver()
        } else
        if (this.state.squares[0] === "red" && this.state.squares[4] === "red" && this.state.squares[8] === "red") {
            this.gameOver()
        } else
        if (this.state.squares[2] === "red" && this.state.squares[4] === "red" && this.state.squares[6] === "red")  {
            this.gameOver()
        }
    }
    renderShowPlayerTurn() {
        if (this.state.player === "red") {
            return (
                <div>
                    <p>It's Red's turn</p>
                </div>
            ) 
        } else if (this.state.player === "blue") {
            return (
                <div>
                    <p>It's Blue's turn</p>
                </div>
            ) 
        }
    }
    renderVictoryText() {
        if (this.state.squares[0] === "blue" && this.state.squares[1] === "blue" && this.state.squares[2] === "blue") {
            return (
                <div>
                    <p>Blue wins</p>
                </div>
            )
        } else
        if (this.state.squares[3] === "blue" && this.state.squares[4] === "blue" && this.state.squares[5] === "blue") {
            return (
                <div>
                    <p>Blue wins</p>
                </div>
            )
        } else
        if (this.state.squares[6] === "blue" && this.state.squares[7] === "blue" && this.state.squares[8] === "blue") {
            return (
                <div>
                    <p>Blue wins</p>
                </div>
            )
        } else
        if (this.state.squares[0] === "blue" && this.state.squares[3] === "blue" && this.state.squares[6] === "blue") {
            return (
                <div>
                    <p>Blue wins</p>
                </div>
            )
        } else
        if (this.state.squares[1] === "blue" && this.state.squares[4] === "blue" && this.state.squares[7] === "blue") {
            return (
                <div>
                    <p>Blue wins</p>
                </div>
            )
        } else
        if (this.state.squares[2] === "blue" && this.state.squares[5] === "blue" && this.state.squares[8] === "blue") {
            return (
                <div>
                    <p>Blue wins</p>
                </div>
            )
        } else
        if (this.state.squares[0] === "blue" && this.state.squares[4] === "blue" && this.state.squares[8] === "blue") {
            return (
                <div>
                    <p>Blue wins</p>
                </div>
            )
        } else
        if (this.state.squares[2] === "blue" && this.state.squares[4] === "blue" && this.state.squares[6] === "blue")  {
            return (
                <div>
                    <p>Blue wins</p>
                </div>
            )
        } else
        if (this.state.squares[0] === "red" && this.state.squares[1] === "red" && this.state.squares[2] === "red") {
            return (
                <div>
                    <p>Red wins</p>
                </div>
            )
        } else
        if (this.state.squares[3] === "red" && this.state.squares[4] === "red" && this.state.squares[5] === "red") {
            return (
                <div>
                    <p>Red wins</p>
                </div>
            )
        } else
        if (this.state.squares[6] === "red" && this.state.squares[7] === "red" && this.state.squares[8] === "red") {
            return (
                <div>
                    <p>Red wins</p>
                </div>
            )
        } else
        if (this.state.squares[0] === "red" && this.state.squares[3] === "red" && this.state.squares[6] === "red") {
            return (
                <div>
                    <p>Red wins</p>
                </div>
            )
        } else
        if(this.state.squares[1] === "red" && this.state.squares[4] === "red" && this.state.squares[7] === "red") {
            return (
                <div>
                    <p>Red wins</p>
                </div>
            )
        } else
        if (this.state.squares[2] === "red" && this.state.squares[5] === "red" && this.state.squares[8] === "red") {
            return (
                <div>
                    <p>Red wins</p>
                </div>
            )
        } else
        if (this.state.squares[0] === "red" && this.state.squares[4] === "red" && this.state.squares[8] === "red") {
            return (
                <div>
                    <p>Red wins</p>
                </div>
            )
        } else
        if (this.state.squares[2] === "red" && this.state.squares[4] === "red" && this.state.squares[6] === "red")  {
            return (
                <div>
                    <p>Red wins</p>
                </div>
            )
        }
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
                <button className="btn"  onClick={this.reset}>New Game</button>
                {this.renderShowPlayerTurn()}
                {this.renderVictoryText()}
            </div>
        )
    }
}