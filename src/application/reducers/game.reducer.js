import {
    LOAD_GAME_STATE,
    LOAD_GAME_STATE_SUCCESS,
    UPDATE_GAME_HISTORY,
    SET_GAME_STEP,
    SET_NEXT_PLAYER,
    RESET_GAME
} from '../actions/game.actions';

const initialState = {
    History: [Array(9).fill(null)],
    Step: 0,
    NextPlayer: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GAME_STATE: {
            return {
                ...state
            };
        }
        case LOAD_GAME_STATE_SUCCESS: {
            return { ...state, ...action.payload };
        }

        case UPDATE_GAME_HISTORY: {
            return { ...state, History: [...state.History, action.payload] };
        }

        case SET_GAME_STEP: {
            return { ...state, Step: action.payload };
        }

        case SET_NEXT_PLAYER: {
            return { ...state, NextPlayer: action.payload };
        }

        case RESET_GAME: {
            return {
                History: [Array(9).fill(null)],
                Step: 0,
                NextPlayer: true
            };
        }

        default:
            return state;
    }
};
export default reducer;
