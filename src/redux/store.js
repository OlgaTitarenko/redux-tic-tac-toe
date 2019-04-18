import { createStore} from 'redux';

export const NEW_GAME = 'NEW_GAME';
export const ONE_MOVE = 'ONE_MOVE';
export const MOVE_BACK = 'MOVE_BACK';

const initialState = {
    squares: Array(9).fill(null),
    history: {
        0:Array(9).fill(null)
    },
    move: 0
};

const rootReduser = (state=initialState, action) => {
    switch (action.type) {
        case NEW_GAME :
            return  initialState;
        case ONE_MOVE:
            const square = state.squares.slice();
            let value;
            if ((state.move + 1) % 2 === 0) {
                value = 'O';
            } else  {
                value='X';
            }
            square[action.position] =  value;

            return {
                ...state,
                squares: square,
                move: state.move+1,
                history: {
                    ...state.history,
                    [state.move + 1] : square,
                }
            };
        case MOVE_BACK:
             delete (state.history[action.move]);
            return {
                ...state,
                move: action.move-1,
                history: state.history,
                squares: state.history[action.move - 1],
            };
        default :
            return state;
    }
};

const store = createStore(rootReduser);
export default store;


