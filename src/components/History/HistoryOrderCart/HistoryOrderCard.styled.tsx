import styled from 'styled-components';

export const HistoryOrderCardContainer = styled.div`
  display: flex;

  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colorSubText};

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    width: 580px;
    height: 240px;

    overflow: auto;
  }
`;

export const Title = styled.p`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 700;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  padding: 8px;

  font-size: 14px;
`;
