import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import { themeColorPink, baseInfoRowStyles } from '../../styles/theme';
import School from './SchoolCard';
import FeaturesSection from './FeaturesSection';
import TransitScore from './TransitScore';
import PriceComparisonBar from './PriceComparisonBar';

function AdditionalInfo({ propertyDetails, transit }) {
  const schoolList = propertyDetails.schools;
  const lotFeature = propertyDetails.resoFacts.lotFeatures;
  const communityFeature = propertyDetails.resoFacts.communityFeatures;
  const interiorFeature = propertyDetails.resoFacts.interiorFeatures;
  const windowFeature = propertyDetails.resoFacts.windowFeatures;
  const parkingFeature = propertyDetails.resoFacts.parkingFeatures;
  const appliance = propertyDetails.resoFacts.appliances;
  const nearbyList = propertyDetails?.nearbyHomes;
  const moreFeature = [
    ...(Array.isArray(parkingFeature) ? parkingFeature : []),
    ...(Array.isArray(interiorFeature) ? interiorFeature : []),
  ];
  const walk = transit?.walkScore;
  const bike = transit?.bikeScore;

  const walkScore = walk?.walkscore ? parseInt(walk.walkscore, 10) : null;
  const bikeScore = bike?.bikescore ? parseInt(bike.bikescore, 10) : null;

  const currentPropertyPrice = propertyDetails.price;
  const prices = nearbyList?.map(property => property.price);
  const total = prices.length > 0 ? prices.reduce((a, b) => a + b, 0) : null;
  const averagePrice = total !== null ? total / prices.length : null;

  function findMedian(arr) {
    if (arr.length === 0) return null;

    const sorted = [...arr].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  }

  const medianPrice = findMedian(prices);

  return (
    <Wrapper>
      <InfoRow>
        <Bold>Additional Information</Bold>
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
        <Description>
          Schools, amenities, travel times, price comparison
        </Description>
        <InfoWrapper>
          <ScoreWrapper>
            {walkScore !== null && (
              <TransitScore
                score={walkScore}
                label="Walk Score"
                description={walk.description}
              />
            )}
            {bikeScore !== null && (
              <TransitScore
                score={bikeScore}
                label="Bike Score"
                description={bike.description}
              />
            )}
          </ScoreWrapper>
          {medianPrice !== null && (
            <BarWrapper>
              <PriceComparisonBar
                medianPrice={medianPrice}
                propertyPrice={currentPropertyPrice}
                averagePrice={averagePrice}
              />
            </BarWrapper>
          )}
        </InfoWrapper>
        {lotFeature && lotFeature.length > 0 && (
          <FeaturesSection title="Lot Features" features={lotFeature} />
        )}
        {communityFeature && communityFeature.length > 0 && (
          <FeaturesSection
            title="Community Features"
            features={communityFeature}
          />
        )}
        {windowFeature && windowFeature.length > 0 && (
          <FeaturesSection title="Window Features" features={windowFeature} />
        )}
        {moreFeature && moreFeature.length > 0 && (
          <FeaturesSection title="More Features" features={moreFeature} />
        )}
        {appliance && appliance.length > 0 && (
          <FeaturesSection title="Appliances" features={appliance} />
        )}
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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ScoreWrapper = styled.div`
  margin-right: 3em;
`;

const BarWrapper = styled.div`
  flex-grow: 0;
`;

export default AdditionalInfo;
