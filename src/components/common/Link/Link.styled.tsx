import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  display: inline-block;

  padding: 8px 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;

  color: ${({ theme }) => theme.colorInputText};
  transition: all ${({ theme }) => theme.cubicTransition};

  &.active {
    color: ${({ theme }) => theme.colorButtonText};
    background-color: ${({ theme }) => theme.colorButton};
  }
`;
