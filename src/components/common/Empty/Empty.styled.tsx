import styled from 'styled-components';

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  padding-top: 64px;

  p {
    font-size: 36px;
    color: ${({ theme }) => theme.colorSubText};
  }
`;
