import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import PropertyGrid from '../../components/Property/PropertyGrid';

export const theme = createTheme({
  typography: {
    button: {
      fontSize: 20,
      fontWeight: 700,
    },
  },
});
export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  const likes = useSelector(state => state.likes.list);
  const [properties, setProperties] = useState(likes);

  useEffect(() => {
    setProperties(likes);
  }, [likes]);

  const handleOverlayClick = e => {
    if (e.target.id === 'overlay') {
      onClose();
    }
  };

  return ReactDom.createPortal(
    <>
      <OverlayStyle id="overlay" onClick={handleOverlayClick} />

      <ModalStyle>
        {children}
        <Container>
          <PropertyGrid properties={properties} showCompareButton />
        </Container>
        <Box>
          <Button
            // size="large"
            onClick={onClose}
            variant="contained"
            // color="inherit"
          >
            Close
          </Button>
        </Box>
      </ModalStyle>
    </>,
    document.getElementById('portal')
  );
}

const ModalStyle = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  max-height: calc(100vh - 210px);
`;

const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(100%);
`;

const Box = styled.div`
  margin-top: 1%;
`;

const Container = styled.div`
  margin-top: 10%;
`;
