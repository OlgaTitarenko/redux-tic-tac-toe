import React from 'react';

const Reset = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
    >
      New Game
    </button>
  )
};

export default Reset;
