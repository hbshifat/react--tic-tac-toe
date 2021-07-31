import React from 'react';
import PropTypes from 'prop-types';

// @Style
import squareStyle from './Square.module.scss';

/**
 * Declare Square Component
 * @returns JSX
 */
const Square = ({ value, onClick }) => {
    const style = value ? `${squareStyle.square} ${squareStyle[value]}` : `${squareStyle.square}`;
    return <button className={style} onClick={onClick}></button>;
};

/**
 * Declare Square Component prop types
 */

Square.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Square;
