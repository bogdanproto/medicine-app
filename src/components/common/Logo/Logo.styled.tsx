import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin-bottom: 12px;

  font-size: 12px;
  color: ${({ theme }) => theme.colorLogo};
`;
