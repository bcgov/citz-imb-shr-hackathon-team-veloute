import { FileUpload, NavButton } from '../../components';
import {
  ViewContainer,
  Wrapper,
  ButtonWrapper,
} from './home.styles';

export default function Home() {
  return (
    <ViewContainer>
      <Wrapper>
        <ButtonWrapper>
          <FileUpload />
        </ButtonWrapper>
        <ButtonWrapper>
          <NavButton 
            path="/hm"
            text="New Salary Recommendation"
            hex="#FFD6DA"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <NavButton 
            path="/history"
            text="History"
            hex="#C8E1F8"
          />
        </ButtonWrapper>
      </Wrapper>
    </ViewContainer>
  );
}