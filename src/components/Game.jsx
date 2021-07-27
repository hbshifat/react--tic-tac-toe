import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

const Game = () => {
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
