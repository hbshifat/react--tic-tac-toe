import {
    loadGameStateSuccess,
    LOAD_GAME_STATE,
    UPDATE_GAME_HISTORY,
    SET_GAME_STEP,
    SET_NEXT_PLAYER,
    RESET_GAME
} from '../actions/game.actions';

const LoadGameStateEffect =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === LOAD_GAME_STATE) {
            try {
                let Step = +sessionStorage.getItem('STEP');
                let History = JSON.parse(sessionStorage.getItem('HISTORY'));
                let NextPlayer = JSON.parse(sessionStorage.getItem('NEXT_PLAYER'));
                if (typeof Step === 'number' && Array.isArray(History) && typeof NextPlayer === 'boolean') {
                    dispatch(loadGameStateSuccess({ History, Step, NextPlayer }));
                } else {
                    sessionStorage.setItem('STEP', 0);
                    sessionStorage.setItem('HISTORY', JSON.stringify([Array(9).fill(null)]));
                    sessionStorage.setItem('NEXT_PLAYER', true);
                }
            } catch (error) {
                new Error('Something is worng!!');
            }
        }
    };

const UpdateGameHistoryEffect =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === UPDATE_GAME_HISTORY) {
            const history = JSON.parse(sessionStorage.getItem('HISTORY'));
            if (history) {
                sessionStorage.setItem('HISTORY', JSON.stringify([...history, action.payload]));
            } else {
                sessionStorage.setItem('HISTORY', JSON.stringify([Array(9).fill(null)]));
            }
        }
    };

const SetStepEffect =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === SET_GAME_STEP) {
            const step = +sessionStorage.getItem('STEP');
            if (typeof step === 'number') {
                sessionStorage.setItem('STEP', action.payload);
            } else {
                sessionStorage.setItem('STEP', 0);
            }
        }
    };

const SetNextPlayerEffect =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === SET_NEXT_PLAYER) {
            const nextPlayer = JSON.parse(sessionStorage.getItem('NEXT_PLAYER'));
            if (typeof nextPlayer === 'boolean') {
                sessionStorage.setItem('NEXT_PLAYER', action.payload);
            } else {
                sessionStorage.setItem('NEXT_PLAYER', true);
            }
        }
    };

const resetGameEffect =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === RESET_GAME) {
            sessionStorage.setItem('STEP', 0);
            sessionStorage.setItem('HISTORY', JSON.stringify([Array(9).fill(null)]));
            sessionStorage.setItem('NEXT_PLAYER', true);
        }
    };

const EffectList = [LoadGameStateEffect, UpdateGameHistoryEffect, SetStepEffect, SetNextPlayerEffect, resetGameEffect];

export default EffectList;
