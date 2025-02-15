

import React from 'react'

export default function Event(props) {
  const {event, color, location} = props;
  return (
    <td className={`Event ${color}`}>
      <h5>{event}</h5>
      <p>{location}</p>
    </td>
  )
}
