import { useState, useEffect } from 'react';
import { fetchEvents } from '../../services/api';
import { Link, Outlet } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <main>
      <ul>
        {events.map(evt => (
          <li key={evt.id}>
            <Link to={evt.id}>{evt.name} </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};

export default Events;
