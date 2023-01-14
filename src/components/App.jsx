import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../page/Home';
import Events from '../page/Events';
import EventSubPage from './EventSubPage';
import Details from '../page/Details';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />}>
          <Route path=":evtId" element={<EventSubPage />} />
        </Route>
        <Route path="events/:evtId/details" element={<Details />} />
      </Route>
    </Routes>
  );
};
