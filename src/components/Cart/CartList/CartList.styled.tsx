import styled from 'styled-components';

export const CartListContainer = styled.div`
  width: 440px;
  height: 610px;

  border: 1px solid ${({ theme }) => theme.colorSubText};
  border-radius: 8px 0 0 8px;

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
  height: 586px;
  overflow: auto;
`;

export const TotalText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
