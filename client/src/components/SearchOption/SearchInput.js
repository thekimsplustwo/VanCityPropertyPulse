import * as React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { neighborhoodsVancouver } from './neighborhoods';
import { setLocation } from '../../redux/search/reducer';

const StyledPaper = styled(Paper)`
  margin-top: 1rem;
  padding: 2px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 370px;
  height: 70px;
  background-color: white;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

const StyledAutocomplete = styled(Autocomplete)`
  width: 370px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export default function Search() {
  const dispatch = useDispatch();
  const location = useSelector(state => state.search.location);

  const handleLocationChange = (event, value) => {
    dispatch(setLocation(value));
  };

  return (
    <StyledPaper>
      <StyledAutocomplete
        freeSolo
        disableClearable
        options={neighborhoodsVancouver.map(option => option.title)}
        value={location}
        renderInput={params => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label="Search Location in Vancouver"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        onChange={handleLocationChange}
      />
    </StyledPaper>
  );
}
