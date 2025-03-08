import React, { Component, useEffect, useState } from "react";

export default function RecipeChoices({
  handleChange,
  label,
  choices,
  checked,
}) {



  return (
    <div>
      <div className="radio-buttons">
        <input
          type="text"
          name={label} // currentVal not needed
          placeholder="Guess the ingredient..."
          onChange={handleChange}
          className="textbox"
        />
        {choices && choices.map((choice) => <li key={choice}>{choice}</li>)}
        {/* {choices &&
          choices.map((choice) => (
            <li key={choice}>
              <input
                id={choice}
                value={choice}
                name={label}
                type="radio"
                onChange={handleChange}
                checked={checked == choice}
              />
              {choice}
            </li>
          ))} */}
      </div>
    </div>
  );
}
