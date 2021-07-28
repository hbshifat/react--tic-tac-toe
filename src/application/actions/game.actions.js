export const LOAD_GAME_STATE = '[GAME] Load Game State';
export const LOAD_GAME_STATE_SUCCESS = '[GAME] Load Game State Success';
export const UPDATE_GAME_HISTORY = '[GAME] Update Game History';
export const SET_GAME_STEP = '[GAME] Set Game Step';
export const SET_NEXT_PLAYER = '[GAME] Set Next Player';

export const loadGameState = {
    type: LOAD_GAME_STATE
};

export const loadGameStateSuccess = (data) => ({
    type: LOAD_GAME_STATE_SUCCESS,
    payload: data
});

export const updateGameHistory = (modifyData) => ({
    type: UPDATE_GAME_HISTORY,
    payload: modifyData
});

export const setGameStep = (step) => ({
    type: SET_GAME_STEP,
    payload: step
});

export const setNextPlayer = (SET_GAME_STEP) => ({
    type: SET_NEXT_PLAYER,
    payload: SET_GAME_STEP
});
