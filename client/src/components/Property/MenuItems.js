import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import ReplyIcon from '@mui/icons-material/Reply';
import MapIcon from '@mui/icons-material/Map';
import { addLikesAsync, deleteLikesAsync } from '../../redux/likes/thunks';

function MenuItems({ zpid }) {
  const dispatch = useDispatch();
  const currZpid = parseInt(zpid, 10);

  const likes = useSelector(state => state.likes.list);
  const properties = useSelector(state => state.home.list);

  const liked = likes.some(prop => prop.zpid === currZpid);
  const housing = properties.find(prop => prop.zpid === currZpid);

  const handleAddLike = () => {
    dispatch(addLikesAsync(housing));
  };

  const handleDeleteLike = () => {
    dispatch(deleteLikesAsync(currZpid));
  };

  return (
    <Wrapper>
      <MenuContainer>
        {liked ? (
          <StyledHeartLikedIcon onClick={handleDeleteLike} />
        ) : (
          <StyledHeartBorderIcon onClick={handleAddLike} />
        )}
        <MenuOpt>Save</MenuOpt>
      </MenuContainer>
      <MenuContainer>
        <ReplyIcon />
        <MenuOpt>Share</MenuOpt>
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

const StyledHeartBorderIcon = styled(FavoriteBorderIcon)`
  color: white;
`;

const StyledHeartLikedIcon = styled(FavoriteIcon)`
  color: red;
`;

export default MenuItems;
