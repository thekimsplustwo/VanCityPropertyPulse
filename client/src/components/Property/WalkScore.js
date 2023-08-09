import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWalkAndTransitScoreAsync } from '../../redux/property/thunks';

function WalkScore({ zpid }) {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const walkAndTransitScore = useSelector(
    state => state.property.walkAndTransitScore
  );

  useEffect(() => {
    dispatch(getWalkAndTransitScoreAsync({ zpid, token }));
  }, [zpid]);

  return (
    walkAndTransitScore?.walkScore?.ws_link && (
      <Wrapper>
        <Bold>Walk And Distance Score Details</Bold>
        <IframeWalkScore
          src={walkAndTransitScore.walkScore.ws_link}
          title="WalkScore"
          className="WalkScore"
        />
      </Wrapper>
    )
  );
}

export default WalkScore;

const Wrapper = styled.div`
  display: 'flex';
  font-size: 20px;
  flex-direction: column;
  margin-top: 20px;
`;

const Bold = styled.b`
  font-weight: bold;
  font-size: 32px;
  align-items: left;
  margin-top: 25px;
  margin-left: 20px;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const IframeWalkScore = styled.iframe`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  margin: 32px;

  @media (max-width: 800px) {
    box-sizing: border-box;
    margin: 32px 0;
  }
`;
