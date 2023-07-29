import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Info, ArrowForward, Add } from '@mui/icons-material';
import { themeColorPink } from '../../styles/theme';
// import { Bold, InfoRow } from './DetailedInfo';
import { baseInfoRowStyles } from '../../styles/theme';

function AdditionalInfo() {
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
        <Description>
          Schools, amenities, travel times, and market trends.
        </Description>
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
`;

const Description = styled.p`
  font-size: 20px;
  color: #666666;
  margin-left: 20px;
`;

const MarginBottom = styled.div`
  margin-bottom: 20px;
`;

export default AdditionalInfo;
