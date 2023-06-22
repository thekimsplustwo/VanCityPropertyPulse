import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  styled as muiStyled,
} from '@mui/material';
import styled from 'styled-components';

const StyledButton = muiStyled(Button)({
  backgroundColor: 'white',
  height: '45px',
  fontSize: '17px',
  fontWeight: '550',
  color: 'black',
  '&:hover': {
    border: '1px solid black',
  },
  'white-space': 'nowrap',
  overflow: 'hidden',
  'text-overflow': 'ellipsis',
  marginRight: '10px',
});

const StyledMenuItem = muiStyled(MenuItem)`
  background-color: #e0e0e0;
  color: #333333;
  font-weight: bold;
  &:hover {
    background-color: #bdbdbd;
  }
`;

export default function PriceRange() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApply = () => {
    setAnchorEl(null);
  };

  const handleMinPriceChange = event => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = event => {
    setMaxPrice(event.target.value);
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>
        ${minPrice || 'Min'} - ${maxPrice || 'Max'}
      </StyledButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <TextField
            label="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
            type="number"
            inputProps={{
              min: 0,
              max: 9999999,
              step: 1000,
            }}
          />
        </MenuItem>
        <MenuItem>
          <TextField
            label="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            type="number"
            inputProps={{
              min: 0,
              max: 9999999,
              step: 1000,
            }}
          />
        </MenuItem>
        <StyledMenuItem onClick={handleApply}>Apply</StyledMenuItem>
      </Menu>
    </div>
  );
}
