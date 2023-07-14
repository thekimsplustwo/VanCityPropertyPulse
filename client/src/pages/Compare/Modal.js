import React from 'react';
import Button from '@mui/material/Button';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  width: '500px',
  height: '300px',
};

const OVERLAY_STYLES = {
  positon: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000,
};
export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <Button onClick={onClose}>Close Modal</Button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}
