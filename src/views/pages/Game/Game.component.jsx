import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateWinner } from '../../../shared/utils';
import Board from '../../components/Board/Board.component';
import { getHistory, getNextPlayer, getStep } from './../../../application/selectors/game.selector';
import {
    loadGameState,
    updateGameHistory,
    setGameStep,
    setNextPlayer
} from './../../../application/actions/game.actions';

const Game = () => {
    const dispatch = useDispatch();

    const gameHistory = useSelector(getHistory);
    const nextPlayer = useSelector(getNextPlayer);
    const gameStep = useSelector(getStep);

    useEffect(() => {
        dispatch(loadGameState);
    }, [dispatch]);

    const winner = calculateWinner(gameHistory[gameStep]);
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

    const renderMoves = () =>
        gameHistory.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to Start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });

    return (
        <>
            <Board squares={gameHistory[gameStep]} onClick={handleClick} />

            <div className='info-wrapper'>
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + xO}</h3>
            </div>
        </>
    );
};

export default Game;
