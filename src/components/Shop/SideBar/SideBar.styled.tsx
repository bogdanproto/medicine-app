import styled from 'styled-components';

export const SideBarContainer = styled.aside`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 300px;
  height: calc(100vh - 56px);

  padding: 16px 8px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-right: solid 2px ${({ theme }) => theme.colorElement};
`;
