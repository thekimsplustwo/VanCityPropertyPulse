import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PropertyGrid from '../../components/Property/PropertyGrid';
// import { getListAsync } from '../../redux/home/thunks';
import { getLikesAsync } from '../../redux/likes/thunks';
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
        <h1>Liked Properties</h1>
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

export default Likes;
