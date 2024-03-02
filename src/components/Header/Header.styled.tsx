import styled from 'styled-components';

export const HeaderContainer = styled.header`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 8px 16px 8px 16px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-bottom: solid 2px ${({ theme }) => theme.colorElement};

  button {
    width: fit-content;
    height: 32px;
  }
`;
