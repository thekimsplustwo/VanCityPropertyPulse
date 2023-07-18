import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';

function Header() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  return (
    <FixedNav>
      <Nav />
    </FixedNav>
  );
}

export default Header;

const FixedNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
  border-bottom: 1px solid rgb(230, 230, 230);
  z-index: 99;
`;
