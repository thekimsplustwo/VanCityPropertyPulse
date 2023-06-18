import styled from 'styled-components';
import Nav from './Nav';

function Header() {
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
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
  border-bottom: 1px solid rgb(230, 230, 230);
`;
