import styled from '@emotion/styled';

type NavProps = {
  hex: string;
}
export const ButtonCont = styled.button<NavProps>`
  height: 75pt;
  width: 220pt;
  border: 0px;
  border-radius: 8pt;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ hex }) => hex || '#000'};
  padding: 5pt;
  display: flex;
  &:hover {
    transform: scale(0.95);
  }
`;

export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 16pt;
  text-wrap: auto;
  width: 100%;
  height: 70pt;
  color: black;
  margin: 0;
`;
