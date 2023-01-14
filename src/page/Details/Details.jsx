import { useFetchevent } from '../../hooks/usefetchEvent';
import { EventImg } from 'components/EventSubPage/EventSubPage.styled';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const event = useFetchevent();
  const navigate = useNavigate();
  return (
    event && (
      <div>
        <button type="button" onClick={() => navigate('/events')}>
          Go back
        </button>
        <h2>{event.name} </h2>
        <EventImg src={event.images[0].url} alt={event.name} />
        <ul>
          <li>Genre: {event.classifications[0].genre.name}</li>
          <li>Subgenre: {event.classifications[0].subGenre.name}</li>
        </ul>
      </div>
    )
  );
};
export default Details;
