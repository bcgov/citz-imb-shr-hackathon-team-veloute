import { SearchBar } from '../../components';

import {
  ViewContainer,
  ContentContainer,
} from './hm.styles';

export default function HM() {
  const handleSearchSubmit = (searchTerm: string) => {
    if (searchTerm.length < 8) {
      console.log('Length: ', searchTerm.length);
    }
    console.log('Search term:', searchTerm);
  };

  return (
    <ViewContainer>
      <ContentContainer>
        <SearchBar 
          onSubmit={handleSearchSubmit}
          text="Position Number"
        />
      </ContentContainer>
    </ViewContainer>
  )
}
