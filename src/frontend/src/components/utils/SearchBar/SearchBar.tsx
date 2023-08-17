import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
  text: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, text }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center">
        <TextField
          label={text}
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </Box>
    </form>
  );
};

export default SearchBar;
