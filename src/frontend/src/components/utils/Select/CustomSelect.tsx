/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  label: string;
  value: string;
  onChange: (event: any) => void;
  width?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  value,
  onChange,
  width = '200px',
}) => {
  const selectStyle = {
    width: width,
  };

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        sx={selectStyle}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
