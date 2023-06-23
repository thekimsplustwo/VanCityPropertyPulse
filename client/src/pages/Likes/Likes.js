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

  // Whenever likes changes, update properties
  useEffect(() => {
    setProperties(likes);
  }, [likes]);
  return (
    <Margin>
      <Main>
        <Header>Favourite Homes</Header>
        {/* create a button to clear all likes lists when clicked */}
        <Button />
        <PropertyGrid properties={properties} />
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

export default Likes;
