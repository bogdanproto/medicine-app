import styled from 'styled-components';

interface SwitchButtonProps {
  $isActive: boolean;
}

export const SwitchButton = styled.button<SwitchButtonProps>`
  width: 50%;
  height: 24px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colorButton : 'ligthgray'};

  border: none;
  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.colorButtonTextForm};

  transition: all ${({ theme }) => theme.cubicTransition};

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
