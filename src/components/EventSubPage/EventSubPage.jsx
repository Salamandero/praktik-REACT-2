import { useFetchevent } from '../../hooks/usefetchEvent';
import { EventImg } from './EventSubPage.styled';
import { Link } from 'react-router-dom';
const EventSubPage = () => {
  const event = useFetchevent();
  console.log(event);
  return (
    event && (
      <div>
        <h2>{event.name} </h2>
        <EventImg src={event.images[0].url} alt={event.name} />
        <Link to="details">More details</Link>
      </div>
    )
  );
};
export default EventSubPage;
