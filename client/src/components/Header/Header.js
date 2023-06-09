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
  margin: 0 auto;
`;
