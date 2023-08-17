import { FileUpload } from '../../components';
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
      </Wrapper>
    </ViewContainer>
  );
}