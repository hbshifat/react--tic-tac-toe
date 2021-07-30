import React from 'react';
import PropTypes from 'prop-types';

// @Component
import Square from '../Square/Square.component';

//@Style
import style from './Board.module.scss';

/**
 * Declare Board Component
 * @returns JSX
 */
const Board = ({ squares = [], onClick }) => (
    <div className={style.board}>
        {/* Gerenate Squares */}
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
);

/**
 * Declare propTypes
 */
Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
};

export default Board;
