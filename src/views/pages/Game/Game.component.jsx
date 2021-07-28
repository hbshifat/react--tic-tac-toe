import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateWinner } from '../../../shared/utils';
import Board from '../../components/Board/Board.component';
import { getHistory } from './../../../application/selectors/game.selector';
import { loadGameState, updateGameHistory, setGameStep } from './../../../application/actions/game.actions';

const Game = () => {
    const dispatch = useDispatch();
    const gameHistory = useSelector(getHistory);

    useEffect(() => {
        dispatch(loadGameState);
    }, [dispatch]);

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? 'X' : 'O';

    const handleClick = (i) => {
        const current = history[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = xO;
        setHistory([...history, squares]);
        dispatch(updateGameHistory(squares));
        setStepNumber(history.length);
        dispatch(setGameStep(history.length));
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to Start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });

    return (
        <>
            <h1>React Tic Tac Toe - With Hooks</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />

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
