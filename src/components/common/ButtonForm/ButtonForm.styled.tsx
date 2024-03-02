import styled from 'styled-components';

export const ButtonForm = styled.button`
  width: 60%;
  height: 42px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colorButton};
  border-radius: 8px;
  border: none;

  font-weight: 600;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.02em;

  cursor: pointer;

  color: ${({ theme }) => theme.colorButtonText};

  transition: all ${({ theme }) => theme.cubicTransition};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colorActive};
  }
`;
