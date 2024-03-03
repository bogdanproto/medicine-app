import styled from 'styled-components';

export const IconBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;

  svg {
    color: ${({ theme }) => theme.colorIcon};
    transition: fill ${({ theme }) => theme.cubicTransition};
  }

  &:hover svg,
  &:focus svg {
    fill: ${({ theme }) => theme.colorActive};
  }
`;
