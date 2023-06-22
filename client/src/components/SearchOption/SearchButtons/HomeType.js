import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Menu,
  MenuItem,
  styled as muiStyled,
} from '@mui/material';

const StyledButton = muiStyled(Button)({
  backgroundColor: 'white',
  width: '130px',
  height: '45px',
  fontSize: '17px',
  fontWeight: '550',
  color: 'black',
  '&:hover': {
    border: '1px solid black',
  },
});

export default function HomeType() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [buttonText, setButtonText] = useState('Home Type');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (selectedTypes.length === 0) {
      setButtonText('Home Type');
    }
  };

  const handleSelect = type => {
    setSelectedTypes(prevSelectedTypes => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter(t => t !== type);
      }
      return [...prevSelectedTypes, type];
    });
  };

  const isSelected = type => selectedTypes.includes(type);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        {selectedTypes.length > 0
          ? `${selectedTypes.length} Selected`
          : `${buttonText}`}
      </StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'home-type-button',
        }}
      >
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected('Apartment')}
                onChange={() => handleSelect('Apartment')}
              />
            }
            label="Apartment"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected('House')}
                onChange={() => handleSelect('House')}
              />
            }
            label="House"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected('Condo')}
                onChange={() => handleSelect('Condo')}
              />
            }
            label="Condo"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected('Townhome')}
                onChange={() => handleSelect('Townhome')}
              />
            }
            label="Townhome"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected('Multi-family')}
                onChange={() => handleSelect('Multi-family')}
              />
            }
            label="Multi-family"
          />
        </MenuItem>
      </Menu>
    </div>
  );
}
