import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Info, ArrowForward, Add } from '@mui/icons-material';
import { themeColorPink } from '../../styles/theme';
// import { Bold, InfoRow } from './DetailedInfo';
import { baseInfoRowStyles } from '../../styles/theme';
import School from './SchoolCard';
import FeaturesSection from './FeaturesSection';
import TransitScore from './TransitScore';

function AdditionalInfo({ propertyDetails, transit }) {
  const schoolList = propertyDetails.schools;
  const lotFeature = propertyDetails.resoFacts.lotFeatures;
  const communityFeature = propertyDetails.resoFacts.communityFeatures;
  const walk = transit.walkScore;
  const bike = transit.bikeScore;

  return (
    <Wrapper>
      <InfoRow>
        <Bold>Neighbourhood</Bold>
        <ButtonWrapper>
          <Button
            variant="outlined"
            color="success"
            size="medium"
            endIcon={<Add />}
          />
        </ButtonWrapper>
      </InfoRow>
      <MarginBottom>
        <Description>Schools, amenities, travel times</Description>
        <TransitScore
          score={parseInt(walk.walkscore, 10)}
          label="Walk Score"
          description={walk.description}
        />
        <TransitScore
          score={parseInt(bike.bikescore, 10)}
          label="Bike Score"
          description={bike.description}
        />
        <FeaturesSection title="Lot Features" features={lotFeature} />
        <FeaturesSection
          title="Community Features"
          features={communityFeature}
        />
        {schoolList && schoolList.length > 0 ? (
          schoolList.map((school, index) => (
            <School key={index} school={school} />
          ))
        ) : (
          <NoSchools>Nearby schools not found</NoSchools>
        )}
      </MarginBottom>
    </Wrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;
const Wrapper = styled.div`
  display: 'flex';
  font-size: 20px;
  flex-direction: column;
`;

const InfoRow = styled.p`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${baseInfoRowStyles}
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

const Description = styled.p`
  font-size: 20px;
  color: #666666;
  margin-left: 20px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const MarginBottom = styled.div`
  margin-bottom: 20px;
`;

const NoSchools = styled.div`
  color: ${themeColorPink};
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

export default AdditionalInfo;
