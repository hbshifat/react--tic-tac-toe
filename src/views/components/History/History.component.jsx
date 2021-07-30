import React from 'react';
import { useDispatch } from 'react-redux';
// @style
import style from './History.module.scss';
// @actions
import { setNextPlayer, setGameStep } from './../../../application/actions/game.actions';

const GameHistory = ({ gameHistory }) => {
    const dispatch = useDispatch();

    const goto = (step) => {
        dispatch(setGameStep(step));
        dispatch(setNextPlayer(step % 2 === 0));
    };

    const renderMoves = () =>
        gameHistory.map((_step, move) => {
            const destination = move ? `Go to step #${move}` : 'Go to Start';
            return (
                <li key={move} className='mb-10'>
                    <button
                        onClick={() => goto(move)}
                        className='bg-white-default px-20 py-6 rounded-full font-medium uppercase text-14'
                    >
                        {destination}
                    </button>
                </li>
            );
        });

    return (
        <section className={`${style['game--history']} bg-primary-600 p-20`}>
            <ul>{renderMoves()}</ul>
        </section>
    );
};

export default GameHistory;
