import React from 'react';
import EventEntry from './EventEntry.jsx';` `

const EventList = ({events}) => (

  <table>
    <thead>
      <tr>
        <th> Date </th>
        <th> Description </th>
      </tr>
    </thead>
    
    <tbody>
    {events.map((event,i) => <EventEntry key = {i} event={event}/>)}
    </tbody>
    
  </table>
);

export default EventList;