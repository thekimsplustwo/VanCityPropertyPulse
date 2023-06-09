import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const FixedNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

function Header() {
  return (
    <FixedNav>
      {' '}
      <Nav />{' '}
    </FixedNav>
  );
}

export default Header;
