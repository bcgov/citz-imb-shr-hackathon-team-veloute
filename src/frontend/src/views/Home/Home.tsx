import { FileUpload, NavButton } from '../../components';
import {
  ViewContainer,
  ButtonContainer,
  ButtonWrapper,
} from './home.styles';

export default function Home() {
  return (
    <ViewContainer>
      <ButtonContainer>
        <ButtonWrapper>
          <FileUpload />
        </ButtonWrapper>
        <ButtonWrapper>
          <NavButton 
            path="/hm"
            text="Start New Salary Recommendation"
            hex="#FFD6DA"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <NavButton 
            path="/history"
            text="View Past Salary Recommendations"
            hex="#C8E1F8"
          />
        </ButtonWrapper>
      </ButtonContainer>
    </ViewContainer>
  );
}
