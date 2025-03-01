import React from "react";

export default function Upgrade(props) {
  const {name, description, cost, mult, upgrade} = props;
  return (
    <div className="upgrade">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => upgrade(cost, mult)}>{cost} orangs</button>
    </div>
  );
}
