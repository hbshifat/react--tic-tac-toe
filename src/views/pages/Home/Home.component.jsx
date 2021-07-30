import React from 'react';
import { useHistory } from 'react-router-dom';
// Style
import style from './Home.module.scss';

// Icon
import love from '../../../assets/images/love.png';

const Home = () => {
    const routeHistory = useHistory();
    return (
        /* =================== Start: Home Page ======================*/
        <section className={style.home}>
            {/* Start: container */}
            <div className='container'>
                {/* Start: Header */}
                <header className='py-100 flex items-center justify-center gap-10'>
                    {/* Icon part */}
                    <img src={love} alt='Love Icon' />

                    {/* Title Section */}
                    <section className='title'>
                        {/* Title of the app */}
                        <h1 className='text-center font-mon text-70 text-black-400 mb-20'>Welcome</h1>

                        {/* Subtitle of the app */}
                        <h3 className='text-center font-mon text-54 text-white-400'>
                            Tic Tac Toe <span className='text-black-400'>!</span>
                        </h3>
                    </section>
                </header>
                {/* End: Header */}

                {/* Start: Main */}
                <main className='text-center'>
                    <button className={style['start--btn']} onClick={() => routeHistory.push('/game')}>
                        START GAME
                    </button>
                </main>
            </div>
            {/* End: container */}
        </section>
    );
};

export default Home;
