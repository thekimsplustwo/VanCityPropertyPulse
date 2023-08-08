import React, { useState, useEffect } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  styled as muiStyled,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setMin, setMax } from '../../../redux/search/reducer';

const StyledButton = muiStyled(Button)(({ theme }) => ({
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
  [theme.breakpoints.down('sm')]: {
    width: '110px',
    height: '35px',
    fontSize: '14px',
  },
}));

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
  const dispatch = useDispatch();

  useEffect(() => {
    setMinPrice(searchParams.minPrice || 0);
    setMaxPrice(searchParams.maxPrice || 0);
  }, [searchParams.minPrice, searchParams.maxPrice]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const validatePrices = () => {
    return minPrice <= maxPrice;
  };

  const handleClose = () => {
    if (validatePrices()) {
      setAnchorEl(null);
      dispatch(setMin(minPrice));
      dispatch(setMax(maxPrice));
    } else {
      alert('Max price should be bigger than Min price.');
    }
  };

  const handleApply = () => {
    if (validatePrices()) {
      setAnchorEl(null);
      dispatch(setMin(minPrice));
      dispatch(setMax(maxPrice));
    } else {
      alert('Max price should be bigger than Min price.');
    }
  };

  const handleMinPriceChange = event => {
    const newValue =
      event.target.value === '' ? '' : parseInt(event.target.value, 10);

    if (Number.isNaN(newValue)) {
      return;
    }

    setMinPrice(newValue);
  };

  const handleMaxPriceChange = event => {
    const newValue =
      event.target.value === '' ? '' : parseInt(event.target.value, 10);

    if (Number.isNaN(newValue)) {
      return;
    }

    setMaxPrice(newValue);
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
            sx={{ width: '150px' }}
            inputProps={{
              min: 0,
              max: 9999999,
              step: 10000,
            }}
          />
        </MenuItem>
        <MenuItem>
          <TextField
            label="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            type="number"
            sx={{ width: '150px' }}
            inputProps={{
              min: 0,
              max: 9999999,
              step: 10000,
            }}
          />
        </MenuItem>
        <StyledMenuItem onClick={handleApply}>Apply</StyledMenuItem>
      </Menu>
    </div>
  );
}
