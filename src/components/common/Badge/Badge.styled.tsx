import styled from 'styled-components';

export const BadgeContainer = styled.div`
  display: inline-block;

  position: absolute;
  right: 6px;
  top: 4px;
`;

export const BadgeCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colorTitleText};
  color: ${({ theme }) => theme.colorMainText};

  font-size: 10px;
`;

export const BadgeNumber = styled.span`
  color: ${({ theme }) => theme.colorMainText};
`;
