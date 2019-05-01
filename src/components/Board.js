import React from 'react';
import { connect } from 'react-redux';

import Square from './Square';

import { ACTION_NEW_GAME, ACTION_ONE_MOVE, ACTION_MOVE_BACK } from '../redux/actions';

class Board extends React.Component {
 componentDidMount() {
   this.props.onNewGame();
 };

 handleOnBack = () => {
   this.props.onBackMove();
 };

 handleClick = (event) => {
   const item = +event.target.dataset.name ;
   const square = this.props.squares.slice();

   if (calculateWinner(square).winner || square[item]) {
     return;
   }
   this.props.onNewMove(item);
 };

 handleClickNewGame = () => {
   this.props.onNewGame();
 };

 renderSquare(i, winLine) {
   const winClass = (winLine) && (winLine.includes(i))
     ? 'winner_line'
     : '';

   return <Square
     index={i}
     winClass={winClass}
     value={this.props.squares[i]}
     onClick={this.handleClick}
   />;
 }

 render() {
   const { winner, winLine } = calculateWinner(this.props.squares);
   const moves = 'Move: '+ this.props.move;

   const value = ((this.props.move + 1) % 2 === 0)
     ? 'O'
     : 'X' ;

   const status = winner
     ? 'Winner: '+ winner
     : 'Next player: '+ value;

   const statusBtn = (this.props.move === 0)
     ? 'status btn_hide'
     : 'status';

   return (
     <div>
       <div className="status">{status}</div>
       <div className="status">{moves}</div>
       <div className={statusBtn}>
         <button onClick={this.handleOnBack}>BACK</button>
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
         <button
           onClick={this.handleClickNewGame}
         >
           New Game
         </button>
       </div >
     </div>
   );
 }
}

const mapState = ({ squares, move, history } ) => ( {
    squares: squares,
    move: move,
    history: history,
});

const mapDispatchToProps = (dispatch) =>{
  return {
      onNewMove: pos =>  dispatch(ACTION_ONE_MOVE(pos)),
      onNewGame: () => { dispatch(ACTION_NEW_GAME()) },
      onBackMove: () =>  dispatch(ACTION_MOVE_BACK()),
  }
};


export default connect( mapState, mapDispatchToProps )(Board);


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