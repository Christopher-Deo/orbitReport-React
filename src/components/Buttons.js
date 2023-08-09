import React from 'react';
import satData from './satData';
import "./styling.css";

const Buttons = (props) => {
  const { filterByType, setSat, displaySats } = props;

  return (
    <div className='flex-container'>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
