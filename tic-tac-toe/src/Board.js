import React from 'react';
import './index.css';
import Square from "./Square";
import calculateWinner from "./calculateWinner"
export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: new Array(9),
            xIsNext: true,
        }
    }

    handleClick(i) {
        let newSquares = [...this.state.squares];
        if (calculateWinner(newSquares) || newSquares[i])
            return;
        newSquares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: newSquares,
            xIsNext: !this.state.xIsNext
        })

    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={this.handleClick.bind(this, i)} />;
    }

    render() {
        const winner = calculateWinner(this.state.squares)
        const status = winner ? 'Winner ' + winner : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

}