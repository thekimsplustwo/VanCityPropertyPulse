import React, { useState } from 'react';
import { Button, Menu, styled as muiStyled } from '@mui/material';
import { useDispatch } from 'react-redux';
import HomeTypeMenuItem from './HomeTypeMenuItem';
import { setHomeType } from '../../../redux/search/reducer';

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
  const homeTypes = ['Apartment', 'House', 'Condo', 'Townhome', 'Multi-family'];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [buttonText, setButtonText] = useState('Home Type');
  const dispatch = useDispatch();

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
      let newSelectedTypes;
      if (prevSelectedTypes.includes(type)) {
        newSelectedTypes = prevSelectedTypes.filter(t => t !== type);
      } else {
        newSelectedTypes = [...prevSelectedTypes, type];
      }

      dispatch(setHomeType(newSelectedTypes));
      return newSelectedTypes;
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
        {homeTypes.map(type => (
          <HomeTypeMenuItem
            key={type}
            type={type}
            isSelected={isSelected}
            handleSelect={handleSelect}
          />
        ))}
      </Menu>
    </div>
  );
}
