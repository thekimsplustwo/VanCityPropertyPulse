import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropertyGrid from '../../components/Property/PropertyGrid';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: '50px',
  zIndex: 1000,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const OVERLAY_STYLES = {
  positon: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
};
export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  const likes = useSelector(state => state.likes.list);
  const [properties, setProperties] = useState(likes);

  useEffect(() => {
    setProperties(likes);
  }, [likes]);

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />

      <div style={MODAL_STYLES}>
        {children}
        <Button onClick={onClose}>Close</Button>
        <PropertyGrid properties={properties} showCompareButton />
      </div>
    </>,
    document.getElementById('portal')
  );
}
