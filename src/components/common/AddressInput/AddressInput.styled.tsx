import styled from 'styled-components';

export const InputList = styled.ul`
  position: absolute;

  height: 64px;
  width: 100%;

  overflow-y: scroll;

  padding: 4px;

  li {
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colorSubText};
    }
  }
`;
