import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// @Component
import Board from '../../components/Board/Board.component';

// @Ulits
import { calculateWinner } from '../../../shared/utils';

// @Actions
import {
    setGameStep,
    loadGameState,
    setNextPlayer,
    updateGameHistory
} from './../../../application/actions/game.actions';

// @Selectors
import { getHistory, getNextPlayer, getStep } from './../../../application/selectors/game.selector';

/**
 *
 * @returns React.Element
 */
const Game = () => {
    // Fetch history of the game from selector
    const gameHistory = useSelector(getHistory);

    // Get next player of the game from selector
    const nextPlayer = useSelector(getNextPlayer);

    // Get game step from selector
    const gameStep = useSelector(getStep);

    // Calculate winner based on user action
    const winner = calculateWinner(gameHistory[gameStep]);

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

    const xO = nextPlayer ? 'X' : 'O';

    const handleClick = (i) => {
        const current = gameHistory[gameStep];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = xO;

        dispatch(updateGameHistory(squares));
        dispatch(setGameStep(gameHistory.length));
        dispatch(setNextPlayer(!nextPlayer));
    };

    const jumpTo = (step) => {
        dispatch(setGameStep(step));
        dispatch(setNextPlayer(step % 2 === 0));
    };

    return (
        <>
            <p className='text-primary-default'>Hello</p>
        </>
    );
};

export default Game;
