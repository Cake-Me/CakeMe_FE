import styled from 'styled-components';

export const SectionTabsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom:15px;
`;

export const TabGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 15px; /* 버튼 간격 */
`;

export const TabButton = styled.button`
  height: 30px;
  width: 110px;
  // padding: 8px 20px;
  margin -left : 15px;
  margin -right : 15px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#D5AA81' : '#CFB7A0')};
  border: 1px solid #D5AA81;
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color : #F7F2EB;
  box-shadow: ${({ $isSelected }) => ($isSelected ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};

  // &:hover {
  //   background-color: ${({ $isSelected }) => ($isSelected ? '#D5AA81' : '#F7F2EB')};
  // }

  transition: all 0.3s ease-in-out;
`;
