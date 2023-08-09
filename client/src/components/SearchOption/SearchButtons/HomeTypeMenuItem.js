import { Checkbox, FormControlLabel, MenuItem } from '@mui/material';

function HomeTypeMenuItem({ type, isSelected, handleSelect }) {
  return (
    <MenuItem>
      <FormControlLabel
        control={
          <Checkbox
            checked={isSelected(type)}
            onChange={() => handleSelect(type)}
          />
        }
        label={type}
      />
    </MenuItem>
  );
}

export default HomeTypeMenuItem;
