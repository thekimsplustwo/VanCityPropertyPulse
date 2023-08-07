import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NearbyProperties from './NearbyProperties';

function NearByHomes({ nearbyHomes }) {
  return (
    nearbyHomes && (
      <Wrapper>
        <InfoRow />
        <Bold>Nearby homes</Bold>
        <NearbyProperties properties={nearbyHomes} />
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: 'flex';
  font-size: 20px;
  flex-direction: column;
  font-family: arial, sans-serif;
`;

const Bold = styled.b`
  font-weight: bold;
  font-size: 32px;
  align-items: left;
  margin-top: 20px;
  margin-left: 20px;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const InfoRow = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export default NearByHomes;
