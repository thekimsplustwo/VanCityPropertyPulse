import styled from 'styled-components';
import { Tooltip } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useNavigate } from 'react-router-dom';
import { convertPriceToCAD } from '../../utils/utils';

function PropertyHeader({ propertyDetails }) {
  const address = {
    city: propertyDetails.address?.city ?? '',
    neighborhood: propertyDetails.address?.neighborhood ?? '',
    state: propertyDetails.address?.state ?? '',
    streetAddress: propertyDetails.address?.streetAddress ?? '',
    zipcode: propertyDetails.address?.zipcode ?? '',
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitleWrapper>
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
            <h1>{address.streetAddress}</h1>
            <h3>
              {address.city}, {address.state}
            </h3>
          </HeaderTitle>
        </HeaderTitleWrapper>
        <HeaderSubTitle>
          <ArrowCircleLeftOutlinedIcon
            style={{
              fontSize: '40px',
              marginBottom: '10px',
              opacity: '0',
            }}
          />
          <h1>{convertPriceToCAD(propertyDetails.price)}</h1>
          <h3>
            {convertPriceToCAD(propertyDetails.resoFacts?.pricePerSquareFoot) ??
              ''}
            /sqft
          </h3>
        </HeaderSubTitle>
      </HeaderWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px 0;
`;

const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 10px;
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
  h3 {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 22px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

const HeaderSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
  h3 {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 22px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

export default PropertyHeader;
