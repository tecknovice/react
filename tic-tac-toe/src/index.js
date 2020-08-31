import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./Board"
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>phần lifting state up 2 cấp (Square => Board => Game) khó</div>
                    <ol>phần time travel rất khó</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
