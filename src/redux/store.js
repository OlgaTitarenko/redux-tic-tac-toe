import { createStore } from 'redux';

import { NEW_GAME, MOVE_BACK, ONE_MOVE } from './actions';

const initialState = {
  squares: Array(9).fill(null),
  history: {
    0: Array(9).fill(null),
  },
  move: 0,
};

const rootReduser = (state = initialState, action) => {

  switch (action.type) {
    case NEW_GAME:
      return initialState;
    case ONE_MOVE:
      const square = state.squares.slice();
      const value = ((state.move + 1) % 2 === 0)
        ? 'O'
        : 'X' ;

      square[action.payload] = value;

      return {
        ...state,
        squares: square,
        move: state.move + 1,
        history: {
          ...state.history,
          [state.move + 1] : square,
        }
      };

    case MOVE_BACK:
      if (state.move === 0) {
        return initialState;
      }

      const history = {};
      for (const key in state.history) {
        history[key] = state.history[key];
      }

      delete (history[state.move-1]);

      return {
        ...state,
        move: state.move - 1,
        history: history,
        squares: state.history[state.move - 1],
      };

    default:
      return state;
  }
};

const store = createStore(rootReduser);
export default store;
