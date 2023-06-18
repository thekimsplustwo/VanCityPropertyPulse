import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Input() {
  return (
    <Paper
      component="form"
      sx={{
        marginTop: '1rem',
        p: '2px 4px',
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by Location"
        inputProps={{ 'aria-label': 'Search by Location' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
