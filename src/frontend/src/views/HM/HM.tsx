import { SearchBar, CustomSelect } from '../../components';
import { useState } from 'react';

import {
  ViewContainer,
  ContentContainer,
  EmptyTextBoxes,
} from './hm.styles';

export default function HM() {
  const [positionNumber, setPositionNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [positionData, setPositionData] = useState([{}])
  const [positionExists, setPositionExists] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [ministry, setMinistry] = useState('');
  const [band, setBand] = useState('');
  const [titleOptions, setTitleOptions] = useState([{ value: '', label: ''}]);
  const [ministryOptions, setMinistryOptions] = useState([{ value: '', label: ''}]);
  const [bandOptions, setBandOptions] = useState([{ value: '', label: ''}]);

  const ExperienceLevels = [
    { value: '1', label: '1'},
    { value: '2', label: '2'},
    { value: '3', label: '3'},
    { value: '4', label: '4'},
  ];

  // TODO: GET to position number to get positionData
  const handleSearchSubmit = (searchTerm: string) => {
    setPositionNumber(searchTerm);
    if (searchTerm.length < 8) {
      const zerosToAdd = Math.max(0, 8 - searchTerm.length);
      const leadingZeros = '0'.repeat(zerosToAdd);
      setPositionNumber(leadingZeros + searchTerm);
    }
    console.log('Search term:', positionNumber);
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
      </ContentContainer>
    </ViewContainer>
  )
}
