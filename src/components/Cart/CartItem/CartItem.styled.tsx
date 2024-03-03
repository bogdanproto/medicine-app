import styled from 'styled-components';

export const CartItemContainer = styled.li`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  width: 410px;
  height: 140px;

  padding: 8px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colorSubText};

  img {
    width: 200px;
    height: 112px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ItemBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 170px;

  padding: 8px;

  h4 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 600;
  }
`;
