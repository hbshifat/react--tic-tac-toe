import React from 'react';

// Custom hook
import { useGameLogic } from './Game.logic';

// @Style
import style from './Game.module.scss';

// @Component
import Board from '../../components/Board/Board.component';
import History from '../../components/History/History.component';

/**
 * Declare Game Component
 * @returns JSX
 */
const Game = () => {
    // Using Custom hook name 'useGameLogic'
    const [gameHistory, gameStep, winner, routeHistroy, player, handleClick, resetGameNow] = useGameLogic();
    const current = gameHistory?.length ? gameHistory.at(gameStep) : [];

    const playerText = (
        <p className='text'>
            next player is <span className='text-white-default'>{player}</span>
        </p>
    );

    const winnerText = (
        <p>
            winner : <span className='text-white-default'>{winner}</span>
        </p>
    );

    /**
     * Start: Header section
     */
    const header = (
        <header className='header mb-100'>
            <h3 className='text-center text-30 text-black-400 font-medium uppercase'>
                {winner ? winnerText : playerText}
            </h3>
        </header>
    );

    /**
     * Start: Main section
     */
    const mainSection = (
        <div className={style['game--wrapper']}>
            <main className='flex justify-center mb-100 gap-30'>
                <Board squares={current} onClick={handleClick} />
                <History gameHistory={gameHistory} />
            </main>
        </div>
    );

    /**
     * Start: Footer Section
     */
    const footer = (
        <footer>
            <section className='action--button-group flex gap-10'>
                <button class={style['action--btn']} onClick={() => resetGameNow()} disabled={!(gameStep > 0)}>
                    RESET GAME
                </button>

                <button class={style['action--btn']} onClick={() => routeHistroy.push('/')}>
                    EXIT TO HOME
                </button>
            </section>
        </footer>
    );

    return (
        <section className=' bg-primary-default'>
            <div className='container flex items-center justify-center flex-col'>
                {header}
                {mainSection}
                {footer}
            </div>
        </section>
    );
};

export default Game;
