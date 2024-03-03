import styled from 'styled-components';

export const CardContainer = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;

  border-radius: 8px;

  width: 166px;
  height: 200px;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    color: ${({ theme }) => theme.colorTitleText};
  }
`;
