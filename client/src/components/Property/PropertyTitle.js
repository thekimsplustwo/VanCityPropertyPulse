import styled from 'styled-components';
import { convertPriceToCAD } from '../../utils/utils';

function PropertyHeader({ propertyDetails }) {
  const address = {
    city: propertyDetails.address?.city ?? '',
    neighborhood: propertyDetails.address?.neighborhood ?? '',
    state: propertyDetails.address?.state ?? '',
    streetAddress: propertyDetails.address?.streetAddress ?? '',
    zipcode: propertyDetails.address?.zipcode ?? '',
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>
          <h1>{address.streetAddress}</h1>
          <h3>
            {address.city}, {address.state}
          </h3>
        </HeaderTitle>
        <HeaderSubTitle>
          <h1>{convertPriceToCAD(propertyDetails.price)}</h1>
          <h3>
            {convertPriceToCAD(propertyDetails.pricePerSquareFoot)}
            /unit
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
`;

export default PropertyHeader;
