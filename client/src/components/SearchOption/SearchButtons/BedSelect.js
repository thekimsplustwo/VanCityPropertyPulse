import React, { useState } from 'react';
import { Button, Menu, MenuItem, styled as muiStyled } from '@mui/material';

const StyledButton = muiStyled(Button)({
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
});

export default function BedSelect() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState('0+');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = value => () => {
    setAnchorEl(null);
    setSelectedOption(value);
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>{selectedOption} Bed</StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleClose('0+ ')}>0+</MenuItem>
        <MenuItem onClick={handleClose('1+ ')}>1+</MenuItem>
        <MenuItem onClick={handleClose('2+ ')}>2+</MenuItem>
        <MenuItem onClick={handleClose('3+ ')}>3+</MenuItem>
        <MenuItem onClick={handleClose('4+ ')}>4+</MenuItem>
      </Menu>
    </div>
  );
}
