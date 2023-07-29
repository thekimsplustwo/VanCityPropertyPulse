import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cheerio from 'cheerio';
import axios from 'axios';
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

  useEffect(() => {
    //
  }, [walkAndTransitScore]);

  return (
    walkAndTransitScore?.walkScore?.ws_link && (
      <Wrapper>
        <Bold>Walk And Distance Score</Bold>
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
  margin-top: 20px;
  margin-left: 20px;
`;

const InfoRow = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const IframeWalkScore = styled.iframe`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  margin: 32px;
`;
