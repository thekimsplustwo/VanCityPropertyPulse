import React, { useState, useEffect } from 'react';
import { Button, Menu, MenuItem, styled as muiStyled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setBed } from '../../../redux/search/reducer';

const StyledButton = muiStyled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  width: '90px',
  height: '45px',
  fontSize: '17px',
  fontWeight: '550',
  color: 'black',
  '&:hover': {
    border: '1px solid black',
  },
  marginRight: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '35px',
    fontSize: '14px',
  },
}));

export default function BedSelect() {
  const searchParams = useSelector(state => state.search);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState(
    searchParams.bedsMin || 0
  );
  const dispatch = useDispatch();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = value => () => {
    setAnchorEl(null);
    setSelectedOption(value);
    dispatch(setBed(value));
  };

  useEffect(() => {
    setSelectedOption(searchParams.bedsMin || 0);
  }, [searchParams.bedsMin]);

  return (
    <div>
      <StyledButton onClick={handleClick}>{selectedOption}+ Bed</StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleClose(0)}>0+</MenuItem>
        <MenuItem onClick={handleClose(1)}>1+</MenuItem>
        <MenuItem onClick={handleClose(2)}>2+</MenuItem>
        <MenuItem onClick={handleClose(3)}>3+</MenuItem>
        <MenuItem onClick={handleClose(4)}>4+</MenuItem>
      </Menu>
    </div>
  );
}
