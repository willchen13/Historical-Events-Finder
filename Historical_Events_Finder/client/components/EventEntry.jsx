import React from 'react';

const EventEntry = ({event}) => (
  <tr>
    <td> {event.date} </td>
    <td> {event.description} </td>
  </tr>
);

export default EventEntry;


