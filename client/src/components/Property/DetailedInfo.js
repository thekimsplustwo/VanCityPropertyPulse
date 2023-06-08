import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function DetailedInfo(props) {
  return (
    <Wrapper>
      <Section>Description</Section>
    </Wrapper>
  );
}

export default DetailedInfo;

const Wrapper = styled.div`
  display: flex;
  font-size: 25px;
`;

const Section = styled.section`
  display: flex;
`;
