import React, { useState } from 'react'



export default function Card({ id, title, definition, bin, timeRemaining, incorrectTimes, handleClick, updateBin }) {
  const [value, setValue] = useState(false);

  const showMeAnswer = () => {
    setValue(!value);
  };

  const updateIncorrect = () => {
    handleClick(id);
  };

  const handleCorrect = () => {
    updateBin(id);
  };

  //changing time to 0 if it's negative (personal preference)
  const time = timeRemaining < 0 ? 0: timeRemaining;
  
  return (
    <div className="card">
      <h3>Word: {title}</h3>
      {value && <h3>Definition: {definition}</h3>}
      <h4>Bin: {bin}</h4>

      <h4>Remaining Time: {time}</h4>
      <h4>Incorrect Times: {incorrectTimes}</h4>
      {
        !value && (
      <button onClick={showMeAnswer}>Show Definition</button>
        )
      }
      {value && (
        <>
          <button onClick={handleCorrect}>I got it</button>
          <button onClick={updateIncorrect}>I did not get it</button>
        </>
      )}
    </div>
  );
}