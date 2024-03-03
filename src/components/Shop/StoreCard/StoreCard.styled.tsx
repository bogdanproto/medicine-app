import styled from 'styled-components';

interface StoreBoxProps {
  $isActive: boolean;
}

export const StoreCardContainer = styled.li`
  width: 100%;
  height: 64px;
`;

export const StoreBox = styled.div<StoreBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colorButton : theme.colorMainText};

  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colorButtonText : theme.colorTitleText};

  height: 100%;
  font-size: 12px;
  font-weight: 500;

  cursor: pointer;

  transition: all ${({ theme }) => theme.cubicTransition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colorActive};
    color: ${({ theme }) => theme.colorButtonText};
  }
`;
