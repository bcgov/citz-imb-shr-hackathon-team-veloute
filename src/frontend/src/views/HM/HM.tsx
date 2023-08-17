import { SearchBar, CustomSelect } from '../../components';
import { useState } from 'react';

import {
  ViewContainer,
  ContentContainer,
} from './hm.styles';

export default function HM() {
  const [selectedOption, setSelectedOption] = useState('');
  const ExperienceLevels = [
    { value: '1', label: '1'},
    { value: '2', label: '2'},
    { value: '3', label: '3'},
    { value: '4', label: '4'},
  ];

  const handleSearchSubmit = (searchTerm: string) => {
    if (searchTerm.length < 8) {
      console.log('Length: ', searchTerm.length);
    }
    console.log('Search term:', searchTerm);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedOption(event.target.value as string);
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
          value={selectedOption}
          onChange={handleSelectChange}
          width="320px"
        />
      </ContentContainer>
    </ViewContainer>
  )
}
