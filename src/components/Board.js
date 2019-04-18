import React from 'react';
import { connect } from 'react-redux';

import Square from './Square';
import  Reset from './Reset';

import {ONE_MOVE, NEW_GAME, MOVE_BACK} from '../redux/store';

class Board extends React.Component {
    componentDidMount() {
       this.props.onNewGame();
    }

    handleOnBack(move) {
        this.props.onBackMove(move);
    }
    handleClick(i) {
        const square = this.props.squares.slice();
        if (calculateWinner(square).winner || square[i]) {
            return;
        }
        this.props.onNewMove(i);
    }

    handleClickNewGame() {
        this.props.onNewGame();
    }

    renderSquare(i,winLine) {
        let winClass ='';
        if (winLine) {
            winClass = (winLine.indexOf(i) !== -1) ?
                'winner_line' : '';
        }
        return <
            Square
            winClass={winClass}
            value={this.props.squares[i]}
            onClick = {() => this.handleClick(i)}
        />;
    }

    render() {
        const winner = calculateWinner(this.props.squares).winner;
        let winLine='';
        let status;
        const moves = 'Move: '+this.props.move;
        let value;
        if ((this.props.move + 1) % 2 === 0) {
            value = 'O';
        } else  {
            value='X';
        }

        if (winner) {
            status = 'Winner: '+ winner;
            winLine = calculateWinner(this.props.squares).winLine;
        } else {
            status = 'Next player: '+ value;
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="status">{moves}</div>
                <div className="status">
                    <button onClick={() => this.handleOnBack(this.props.move)}>BACK</button>
                </div>

                <div className="board-row">
                    {this.renderSquare(0,winLine)}
                    {this.renderSquare(1,winLine)}
                    {this.renderSquare(2,winLine)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3,winLine)}
                    {this.renderSquare(4,winLine)}
                    {this.renderSquare(5,winLine)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6,winLine)}
                    {this.renderSquare(7,winLine)}
                    {this.renderSquare(8,winLine)}
                </div>
                <div  className="new_game_button">
                    <Reset
                        onClick = {() => this.handleClickNewGame()}
                    />
                </div >
            </div>

        );
    }
}
const mapState = (state) => {
    return {
        squares: state.squares,
        move: state.move,
        history: state.history,
    };
};

const mapDispatchToProps = (dispatch) =>{
  return {
       onNewMove: (pos) => {
           const action = {
               type: ONE_MOVE,
               position: pos,
           };
           dispatch(action);
       },
      onNewGame: () => {
           const action = {
               type: NEW_GAME
           };
           dispatch(action);
      },
      onBackMove: (move) => {
           const action = {
               type: MOVE_BACK,
               move: move,
           };
           dispatch(action);
      },
  }
};


export default connect( mapState, mapDispatchToProps)(Board);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return {
                winner: squares[a],
                winLine: lines[i]
            };
        }
    }
    return {
        winner: null,
        winLine: null
    };
}