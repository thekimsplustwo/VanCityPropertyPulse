import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import ReplyIcon from '@mui/icons-material/Reply';
import MapIcon from '@mui/icons-material/Map';

function MenuItems(props) {
  return (
    <Wrapper>
      <MenuContainer>
        <FavoriteBorderOutlined />
        <MenuOpt>Save</MenuOpt>
      </MenuContainer>
      <MenuContainer>
        <ReplyIcon />
        <MenuOpt>Share</MenuOpt>
      </MenuContainer>
      <MenuContainer>
        <MapIcon />
        <MenuOpt>Map</MenuOpt>
      </MenuContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  border: 2px solid gray;
  opacity: 0.3;
  border-radius: 10px;
  padding: 3px 0;
  margin: 10px;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const MenuOpt = styled.div`
  padding: 0 0.3rem;
  font-size: 15px;
  font-weight: 5rem;
`;

export default MenuItems;
