import React from 'react'
import './Game.css';

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            player: "red",
            squares: ["white", "white", "white", "white", "white", "white", "white", "white", "white"],
            turn: 0,
            blueScore: 0,
            redScore: 0
        }
    }
    changeSquareColor =(id)=> {
        console.log(this.state.turn)
        let tempSquare = [...this.state.squares]
        if (this.state.player === "red") {
            tempSquare.splice(id, 1, "red")
            this.setState(prevState => {
                return {
                    ...prevState,
                    player: "blue",
                    squares: [...tempSquare],
                    turn: this.state.turn + 1
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
                    turn: this.state.turn + 1
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
                turn: 0
            }
        })
    }
    gameOver =(winner)=> {
        if (winner === "blue") {
        this.setState(prevState => {
            return {
                ...prevState,
                player: "gameOver",
                blueScore: this.state.blueScore + 1
            }
        })
    } else if (winner === "red") {
        this.setState(prevState => {
            return {
                ...prevState,
                player: "gameOver",
                redScore: this.state.redScore + 1
            }
        })
    } else {
        this.setState(prevState => {
            return {
                ...prevState,
                player: "gameOver"
            }
        })
    }
    }
    victoryConditions =()=> {
        if (this.state.squares[0] === "blue" && this.state.squares[1] === "blue" && this.state.squares[2] === "blue") {
            let winner = "blue"
            this.gameOver(winner)
        } else
        if (this.state.squares[3] === "blue" && this.state.squares[4] === "blue" && this.state.squares[5] === "blue") {
            let winner = "blue"
            this.gameOver(winner)
        } else
        if (this.state.squares[6] === "blue" && this.state.squares[7] === "blue" && this.state.squares[8] === "blue") {
            let winner = "blue"
            this.gameOver(winner)
        } else
        if (this.state.squares[0] === "blue" && this.state.squares[3] === "blue" && this.state.squares[6] === "blue") {
            let winner = "blue"
            this.gameOver(winner)
        } else
        if (this.state.squares[1] === "blue" && this.state.squares[4] === "blue" && this.state.squares[7] === "blue") {
            let winner = "blue"
            this.gameOver(winner)
        } else
        if (this.state.squares[2] === "blue" && this.state.squares[5] === "blue" && this.state.squares[8] === "blue") {
            let winner = "blue"
            this.gameOver(winner)
        } else
        if (this.state.squares[0] === "blue" && this.state.squares[4] === "blue" && this.state.squares[8] === "blue") {
            let winner = "blue"
            this.gameOver(winner)
        } else
        if (this.state.squares[2] === "blue" && this.state.squares[4] === "blue" && this.state.squares[6] === "blue")  {
            let winner = "blue"
            this.gameOver(winner)
        } else
        if (this.state.squares[0] === "red" && this.state.squares[1] === "red" && this.state.squares[2] === "red") {
            let winner = "red"
            this.gameOver(winner)
        } else
        if (this.state.squares[3] === "red" && this.state.squares[4] === "red" && this.state.squares[5] === "red") {
            let winner = "red"
            this.gameOver(winner)
        } else
        if (this.state.squares[6] === "red" && this.state.squares[7] === "red" && this.state.squares[8] === "red") {
            let winner = "red"
            this.gameOver(winner)
        } else
        if (this.state.squares[0] === "red" && this.state.squares[3] === "red" && this.state.squares[6] === "red") {
            let winner = "red"
            this.gameOver(winner)
        } else
        if(this.state.squares[1] === "red" && this.state.squares[4] === "red" && this.state.squares[7] === "red") {
            let winner = "red"
            this.gameOver(winner)
        } else
        if (this.state.squares[2] === "red" && this.state.squares[5] === "red" && this.state.squares[8] === "red") {
            let winner = "red"
            this.gameOver(winner)
        } else
        if (this.state.squares[0] === "red" && this.state.squares[4] === "red" && this.state.squares[8] === "red") {
            let winner = "red"
            this.gameOver(winner)
        } else
        if (this.state.squares[2] === "red" && this.state.squares[4] === "red" && this.state.squares[6] === "red")  {
            let winner = "red"
            this.gameOver(winner)
        } else if (this.state.turn === 9) {
            let winner = "draw"
            this.gameOver(winner)
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
        } else if (this.state.turn === 9) {
            return (
                <div>
                    <p>Draw</p>
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
                <p>Le score est de : Blue {this.state.blueScore} - Red {this.state.redScore}</p>

            </div>
        )
    }
}