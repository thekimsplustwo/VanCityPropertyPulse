import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Tooltip } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropertyGrid from '../../components/Property/PropertyGrid';
import { getLikesAsync, deleteAllLikesAsync } from '../../redux/likes/thunks';

function Likes() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const likes = useSelector(state => state.likes.list);
  const isLogin = useSelector(state => state.users.isLogin);

  const [properties, setProperties] = useState(likes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      navigate('/', { replace: true });
    } else {
      dispatch(getLikesAsync(token));
    }
  }, [dispatch, isLogin]);

  const handleDeleteAllLike = () => {
    alert('All likes will be deleted');
    dispatch(deleteAllLikesAsync(token));
  };

  // Whenever likes changes, update properties
  useEffect(() => {
    setProperties(likes);
  }, [likes]);
  return (
    isLogin && (
      <Main>
        <OuterHeaderWrapper>
          <HeaderWrapper>
            <HeaderTitle>
              <Tooltip title="Previous Page" placement="top">
                <ArrowCircleLeftOutlinedIcon
                  onClick={handleGoBack}
                  style={{
                    fontSize: '40px',
                    cursor: 'pointer',
                    marginBottom: '10px',
                  }}
                />
              </Tooltip>
              <h1>Favourite Homes</h1>
            </HeaderTitle>
          </HeaderWrapper>
        </OuterHeaderWrapper>
        <Wrapper>
          <MenuContainer>
            <StyledHeartBorderIcon onClick={handleDeleteAllLike} />
            <MenuOpt onClick={handleDeleteAllLike}>Clear All</MenuOpt>
          </MenuContainer>
        </Wrapper>
        <PropertyGrid properties={properties} showCompareButton showHeartIcon />
      </Main>
    )
  );
}

const Main = styled.div`
  padding-top: 5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const OuterHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px 0;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
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
  height: 33px;
  border: 2px solid gray;
  opacity: 0.3;
  border-radius: 10px;
  padding: 3px 0;
  margin: 10px;
  margin-left: 50px;
  &:hover {
    cursor: pointer;
    opacity: 1;
    color: red;
    border-color: red;
  }
`;

const MenuOpt = styled.div`
  padding: 0 0.3rem;
  font-size: 15px;
  font-weight: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default Likes;
