import styled from 'styled-components';

export const CartListContainer = styled.div`
  width: 440px;
  height: 380px;

  padding: 8px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 14px;
  }
`;

export const CartListBox = styled.div`
  height: 360px;
  overflow: auto;
`;

export const TotalText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
