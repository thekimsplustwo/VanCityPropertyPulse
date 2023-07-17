import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  styled as muiStyled,
} from '@mui/material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setMin, setMax } from '../../../redux/search/reducer';

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
  const searchParams = useSelector(state => state.search);
  const [anchorEl, setAnchorEl] = useState(null);
  const [minPrice, setMinPrice] = useState(searchParams.minPrice || 0);
  const [maxPrice, setMaxPrice] = useState(searchParams.maxPrice || 0);
  const [minMaxPrice, setMinMaxPrice] = useState(0);
  const [maxMinPrice, setMaxMinPrice] = useState(9999999);
  const dispatch = useDispatch();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(setMin(minPrice));
    dispatch(setMax(maxPrice));
  };

  const handleApply = () => {
    setAnchorEl(null);
    dispatch(setMin(minPrice));
    dispatch(setMax(maxPrice));
  };

  const handleMinPriceChange = event => {
    const newValue = event.target.value ? parseInt(event.target.value, 10) : 0;

    if (newValue > maxPrice && maxPrice !== 0) {
      setMinPrice(maxPrice);
      setMinMaxPrice(maxPrice);
    } else {
      setMinPrice(newValue);
      setMinMaxPrice(newValue);
    }
  };

  const handleMaxPriceChange = event => {
    const newValue = event.target.value ? parseInt(event.target.value, 10) : 0;

    if (newValue < minPrice && newValue !== 0) {
      setMaxPrice(minPrice);
      setMaxMinPrice(minPrice);
    } else {
      setMaxPrice(newValue);
      setMaxMinPrice(newValue);
    }
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>
        ${searchParams.minPrice ? searchParams.minPrice : 'Min'} - $
        {searchParams.maxPrice ? searchParams.maxPrice : 'Max'}
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
              max: maxPrice !== 0 ? maxMinPrice : undefined,
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
              min: minMaxPrice,
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
