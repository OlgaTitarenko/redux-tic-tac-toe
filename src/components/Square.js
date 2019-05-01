import React from 'react';

const Square = ({winClass, index, onClick, value}) => {
    const win = `square ${winClass}`;
    return (
      <button
        data-name={index}
        className={win}
        onClick={onClick}
      >
        {value}
      </button>
    );
};

export default Square;
