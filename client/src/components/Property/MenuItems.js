import { useSelector, useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import ReplyIcon from '@mui/icons-material/Reply';
import { addLikesAsync, deleteLikesAsync } from '../../redux/likes/thunks';

function MenuItems({ zpid }) {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  // const currZpid = parseInt(zpid, 10);

  const likes = useSelector(state => state.likes.list);
  const properties = useSelector(state => state.home.list);

  const liked = likes && likes.some(prop => prop.zpid === zpid);
  const housing = properties.find(prop => prop.zpid === zpid);

  const handleAddLike = () => {
    dispatch(addLikesAsync({ property: housing, token }));
  };

  const handleDeleteLike = () => {
    dispatch(deleteLikesAsync({ zpid, token }));
  };

  const handleShare = () => {
    // navigator.clipboard.writeText(window.location.href); // after deployment
    const url = window.location.href;
    console.log('URL copied to clipboard:', url);
    alert('URL copied to clipboard');
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
      <MenuContainer onClick={handleShare}>
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
