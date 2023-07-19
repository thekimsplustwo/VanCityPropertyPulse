import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import PropertyGrid from '../../components/Property/PropertyGrid';
// import { getListAsync } from '../../redux/home/thunks';
import { getLikesAsync, deleteAllLikesAsync } from '../../redux/likes/thunks';
// import SearchComponent from '../../components/SearchOption/SearchComponent';

function Likes() {
  const navigate = useNavigate();
  const location = useLocation();

  const likes = useSelector(state => state.likes.list);

  const [properties, setProperties] = useState(likes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikesAsync());
  }, [dispatch]);

  const handleDeleteAllLike = () => {
    alert('All likes will be deleted');
    dispatch(deleteAllLikesAsync());
  };

  // Whenever likes changes, update properties
  useEffect(() => {
    setProperties(likes);
  }, [likes]);
  return (
    <Margin>
      <Main>
        <Header>Favourite Homes</Header>
        {/* create a button to clear all likes lists when clicked */}
        <MenuContainer>
          <StyledHeartBorderIcon onClick={handleDeleteAllLike} />
          <MenuOpt onClick={handleDeleteAllLike}>Clear All</MenuOpt>
        </MenuContainer>
        <PropertyGrid properties={properties} showCompareButton showHeartIcon />
      </Main>
    </Margin>
  );
}

const Main = styled.div`
  padding-top: 5em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Margin = styled.div`
  margin: 20px;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
`;
const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
  text-align: left;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const StyledHeartBorderIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
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
export default Likes;
