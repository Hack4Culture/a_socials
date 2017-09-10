import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function EventList({ club_id, event }){
  console.log(event);
  return (
    <div className="event">
      <a href={`/home/clubs/${club_id}/events/${event.id}`}>
        <div className="event-image">
          <img width="250px" src={event.featured_image} />
        </div>
        <div className="event-details">
          <h3>{event.title}</h3>
          <div>
            <p>{event.venue}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
          </div>
          <div className="event-actions">
            <small>See who's going...</small>
            <button>ATTEND</button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default EventList;