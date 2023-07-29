import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginStatus } from '../../redux/users/reducer';
import Nav from './Nav';

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.users.isLogin);
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    if (!token) {
      dispatch(setLoginStatus(false));
    }
  }, [token]);

  if (location.pathname === '/' || !isLogin) {
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
  font-family: Circular, -apple-system, 'system-ui', Roboto, 'Helvetica Neue',
    sans-serif;
  border-bottom: 1px solid rgb(230, 230, 230);
  z-index: 99;
`;
