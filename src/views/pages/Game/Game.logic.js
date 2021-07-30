import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// @Actions
import {
    setGameStep,
    loadGameState,
    setNextPlayer,
    updateGameHistory,
    resetGame
} from './../../../application/actions/game.actions';

// @Ulits
import { calculateWinner } from '../../../shared/utils';

// @Selectors
import { getHistory, getNextPlayer, getStep } from './../../../application/selectors/game.selector';

export const useGameLogic = () => {
    // Fetch history of the game from selector
    const gameHistory = useSelector(getHistory);

    // Get next player of the game from selector
    const nextPlayer = useSelector(getNextPlayer);

    // Get game step from selector
    const gameStep = useSelector(getStep);

    // Calculate winner based on user action
    const winner = calculateWinner(gameHistory?.at(gameStep));

    // find next player
    const player = nextPlayer ? 'X' : 'O';

    // Declare useHistory hook
    const routeHistroy = useHistory();

    // Declare dispatch using hook
    const dispatch = useDispatch();

    /**
     * Declare useEffect hook
     * Trigger initial action name 'loadGameState'
     *
     */
    useEffect(() => {
        dispatch(loadGameState);
    }, [dispatch]);

    /**
     * Declear handleClick
     * @param {number} i
     * @returns boid
     */
    const handleClick = (i) => {
        // find current used squares
        const squares = [...gameHistory[gameStep]];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = player;
        // update history array
        dispatch(updateGameHistory(squares));
        // update step count
        dispatch(setGameStep(gameHistory.length));
        // update next player status
        dispatch(setNextPlayer(!nextPlayer));
    };

    /**
     * Declear reset game
     * @returns boid
     */
    const resetGameNow = () => {
        // reset all state
        dispatch(resetGame);
    };

    return [gameHistory, gameStep, winner, routeHistroy, player, handleClick, resetGameNow];
};
