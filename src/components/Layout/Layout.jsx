import { StyledNavlink } from './Layout.styled';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes('details') && (
        <header>
          <nav>
            <ul>
              <li>
                <StyledNavlink to="/">Home</StyledNavlink>
              </li>
              <li>
                <StyledNavlink to="events">Events</StyledNavlink>
              </li>
            </ul>
          </nav>
        </header>
      )}

      <Outlet />
    </>
  );
};
export default Layout;
