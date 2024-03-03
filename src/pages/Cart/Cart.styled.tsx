import styled from 'styled-components';

export const CartConteiner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 24px 16px 4px 16px;

  border-radius: 0 0 8px 8px;
  border: 1px solid ${({ theme }) => theme.colorSubText};
`;
