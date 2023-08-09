import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
import { addLikesAsync, deleteLikesAsync } from '../../redux/likes/thunks';
import ShareMenu from './ShareMenu';

function MenuItems({ zpid, address }) {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const likes = useSelector(state => state.likes.list);
  const properties = useSelector(state => state.home.list);

  const likesArray = useMemo(
    () => (Array.isArray(likes) ? likes : []),
    [likes]
  );
  const liked = useMemo(
    () => likesArray.some(prop => prop.zpid === Number(zpid)),
    [likesArray, zpid]
  );
  const housing = useMemo(
    () => properties.find(prop => prop.zpid === Number(zpid)),
    [properties, zpid]
  );

  const handleLike = useCallback(
    event => {
      event.preventDefault();
      event.stopPropagation();
      if (liked) {
        dispatch(deleteLikesAsync({ zpid, token }));
      } else {
        dispatch(addLikesAsync({ property: housing, token }));
      }
    },
    [liked, housing, zpid, token, dispatch]
  );

  return (
    <Wrapper>
      <MenuContainer id="save" onClick={handleLike}>
        <StyledHeartLikedIcon liked={liked} />
        <MenuOpt>Save</MenuOpt>
      </MenuContainer>
      <MenuContainer>
        <ShareMenu url={window.location.href} title={address} />
      </MenuContainer>
    </Wrapper>
  );
}

export default MenuItems;

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
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

const StyledHeartLikedIcon = styled(FavoriteIcon)`
  color: ${({ liked }) => (liked ? 'red' : '#bdbdbd')};
`;
