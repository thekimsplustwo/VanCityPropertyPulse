import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import CompareDeleteButton from '../../components/Compare/CompareDeleteButton';
import Modal from './Modal';
import CompareProps from '../../components/Compare/CompareProps';
import ImageCarousel from '../../components/Property/ImageCarousel';
import { getCompareAsync } from '../../redux/property/thunks';
import PropertyNotFound from '../../components/Property/PropertyNotFound';

function Compare() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isLogin = useSelector(state => state.users.isLogin);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = new URLSearchParams(location.search);

  let zpidList = Array.from(new Set(params.getAll('item')));

  const propertyList = useSelector(state => state.property.compare);
  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    } else {
      dispatch(getCompareAsync({ queryString: location.search, token }));
    }
  }, [isLogin, dispatch, location.search]);

  // If there are more than 3 items in zpidList, show an alert
  useEffect(() => {
    // handle Duplicate zpid
    // Do nothing if there are no URL parameters.
    if (zpidList.length === 0) return;

    const uniqueZpidSet = new Set();
    const uniqueZpidList = [];

    zpidList.forEach(zpid => {
      if (!uniqueZpidSet.has(zpid)) {
        uniqueZpidSet.add(zpid);
        uniqueZpidList.push(zpid);
      }
    });

    if (zpidList.length !== uniqueZpidSet.length) {
      const newURL = `/compare?item=${[...uniqueZpidSet].join('&item=')}`;
      navigate(newURL, { replace: true });
    }

    // handle if more than 3 zpid
    if (zpidList.length > 3) {
      alert(
        'Only 3 properties can be compared at a time. Redirecting to show the last three properties.'
      );

      // Get the last three items from the zpidList
      zpidList = zpidList.slice(-3);

      // Create the new URL with the last three items from zpidList
      const newURL = `/compare?item=${zpidList.join('&item=')}`;

      // Navigate to the new URL
      navigate(newURL, { replace: true });
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleClear = () => {
    navigate('/compare', { replace: true });
    window.location.reload();
  };

  if (isLogin) {
    return (
      <Wrapper>
        <Margin>
          <Main>
            <Header>Compare Properties</Header>
            <ButtonWrapper>
              <Button
                variant="contained"
                size="small"
                position="fixed"
                height="mix-content"
                onClick={handleOpenModal}
              >
                Add Property
              </Button>
              <Button
                variant="contained"
                size="small"
                position="fixed"
                height="mix-content"
                onClick={handleClear}
              >
                Clear
              </Button>
              <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                zpidList={zpidList}
              />
            </ButtonWrapper>
            <ContentWrapper>
              <Grid container spacing={2}>
                {propertyList.map((property, index) => (
                  <Grid
                    item
                    xs={propertyList.length === 1 ? 12 : 4}
                    sm={propertyList.length <= 2 ? 6 : 4}
                    md={4}
                    key={property ? property.zpid : `property-${index}`}
                  >
                    {property && (
                      <Wrapper>
                        <ImageCarousel
                          propertyImages={property?.imgSrc || []}
                        />
                        <CompareDeleteButton zpid={property.zpid}>
                          Delete
                        </CompareDeleteButton>
                        <CompareProps propertyDetails={property} />
                      </Wrapper>
                    )}
                  </Grid>
                ))}
              </Grid>
            </ContentWrapper>
          </Main>
        </Margin>
      </Wrapper>
    );
  }
  return <PropertyNotFound />;
}
const Main = styled.div`
  // padding-top: 23em;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div`
  padding: 10px 50px;
  flex-shrink: 1;
  justify-content: 'space-around';
  align-items: stretch;
  margin: 1;
  margin-top: 1rem;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 90vh;
`;
const Wrapper = styled.div`
  padding-top: 6em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
`;
const Margin = styled.div`
  margin: 20px;
  line-height: 30pt;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #000;
  // margin-bottom: 2rem;
  text-align: left;
  // margin-top: -20rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  & button {
    padding: 8px 16px;
    margin-right: 10px;
  }
  // position: 'fixed';
  // zindex: 1;
  // height="mix-content"

  & button:last-child {
    margin-right: 0;
  }
`;

export default Compare;
