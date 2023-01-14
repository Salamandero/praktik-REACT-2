import { useState, useEffect } from 'react';
import { fetchEventById } from '../services/api';
import { useParams } from 'react-router-dom';

export const useFetchevent = () => {
  const [event, setEvent] = useState(null);
  const { evtId } = useParams();

  useEffect(() => {
    fetchEventById(evtId).then(setEvent);
  }, [evtId]);
  return event;
};
