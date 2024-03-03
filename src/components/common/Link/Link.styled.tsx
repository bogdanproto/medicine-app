import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  display: inline-block;

  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border-radius: 8px;

  color: ${({ theme }) => theme.colorInputText};
  transition: all ${({ theme }) => theme.cubicTransition};

  &.active {
    color: ${({ theme }) => theme.colorButtonText};
    background-color: ${({ theme }) => theme.colorButton};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colorButton};
    color: ${({ theme }) => theme.colorButtonText};
  }
`;
