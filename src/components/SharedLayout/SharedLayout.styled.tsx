import styled from 'styled-components';

export const AppContainer = styled.main`
  box-sizing: border-box;
  max-width: 980px;

  margin: 0 auto;
  border-left: 1px solid ${({ theme }) => theme.colorSubText};
  border-right: 1px solid ${({ theme }) => theme.colorSubText};
`;
