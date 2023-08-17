/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchBar, CustomSelect } from '../../components';
import { useState } from 'react';
import axios from 'axios';
import constants from '../../constants/Constants';
import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';

import {
  ViewContainer,
  ContentContainer,
  EmptyTextBoxes,
} from './hm.styles';

export default function HM() {
  const [positionNumber, setPositionNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [positionData, setPositionData] = useState([{}])
  const [positionExists, setPositionExists] = useState(true);
  const [jobTitle, setJobTitle] = useState('');
  const [ministry, setMinistry] = useState('');
  const [band, setBand] = useState('');
  const [titleOptions, setTitleOptions] = useState([{ value: '', label: ''}]);
  const [ministryOptions, setMinistryOptions] = useState([{ value: '', label: ''}]);
  const [bandOptions, setBandOptions] = useState([{ value: '', label: ''}]);

  const [inputValue, setInputValue] = useState('');

  const ExperienceLevels = [
    { value: '1', label: '1'},
    { value: '2', label: '2'},
    { value: '3', label: '3'},
    { value: '4', label: '4'},
  ];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      "positionNum": {positionNumber},
      "Experience": {experience},
      "Title": {jobTitle},
      "Ministry": {ministry},
      "Band": {band},
      "Comments": {inputValue},
    };
    axios.post(`${constants.BACKEND_URL}/api/submission`, data)
    .catch((err) => {
      console.log(err);
    });
    setPositionNumber('');
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = async (searchTerm: string) => {
    setPositionNumber(searchTerm);
    if (searchTerm.length < 8) {
      const zerosToAdd = Math.max(0, 8 - searchTerm.length);
      const leadingZeros = '0'.repeat(zerosToAdd);
      setPositionNumber(leadingZeros + searchTerm);
    }
    const response = await axios.get(`${constants.BACKEND_URL}/api/searchPosition`);
    setPositionData(response.data);
    setPositionExists(true);
    setJobTitle(response.data.title);
    setMinistry(response.data.ministry);
    setBand(response.data.band.name);
    console.log('Search term:', response);
  };

  const handleExperienceSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setExperience(event.target.value as string);
  };

  const handleTitleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setJobTitle(event.target.value as string);
  };

  const handleMinistrySelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMinistry(event.target.value as string);
  };

  const handleBandSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBand(event.target.value as string);
  };

  return (
    <ViewContainer>
      <ContentContainer>
        <SearchBar 
          onSubmit={handleSearchSubmit}
          text="Position Number"
        />
        <CustomSelect
          options={ExperienceLevels}
          label="Experience"
          value={experience}
          onChange={handleExperienceSelectChange}
          width="320px"
        />
        {positionExists ? (
          <>
            <EmptyTextBoxes>
              <p>
                {jobTitle}
              </p>
            </EmptyTextBoxes>
            <EmptyTextBoxes>
              <p>
                {ministry}
              </p>
            </EmptyTextBoxes>
            <EmptyTextBoxes>
              <p>
                {band}
              </p>
            </EmptyTextBoxes>
          </>
        ) : (
          <>
            <CustomSelect
              options={titleOptions}
              label="Job Title"
              value={jobTitle}
              onChange={handleTitleSelectChange}
              width="320px"
            />
            <CustomSelect
              options={ministryOptions}
              label="Ministry"
              value={ministry}
              onChange={handleMinistrySelectChange}
              width="320px"
            />
            <CustomSelect
              options={bandOptions}
              label="Band"
              value={band}
              onChange={handleBandSelectChange}
              width="320px"
            />
          </>
        )}
        <form onSubmit={handleSubmit}>
          <Box sx={{ p: '10px 0px 0px 0px' }} >
            <TextField
              label="Enter text"
              variant="outlined"
              value={inputValue}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
      </form>
      </ContentContainer>
    </ViewContainer>
  )
}
