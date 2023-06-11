import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';

function Image(props) {
  return (
    <Wrapper>
      <Box
        component="img"
        sx={{
          height: 300,
          display: 'block',
          maxWidth: 500,
          overflow: 'hidden',
          width: '100%',
        }}
        src={props.image}
      />
    </Wrapper>
  );
}

export default Image;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 255px;
  display: block;
  max-width: 400px;
  overflow: hidden;
  line-height: 5px;
`;
