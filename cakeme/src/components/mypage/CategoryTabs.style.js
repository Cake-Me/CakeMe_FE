import styled from 'styled-components';

export const SectionTabsContainer = styled.div`
  margin-top: 20px;
`;

export const TabButtonGroup = styled.div`
  margin-bottom: 20px;
`;

export const Group1 = styled.div`
  margin: 10px;
`;

export const Group2 = styled.div`
  margin: 10px;
`;

export const TabButton = styled.button`
  margin-right: 10px;
  padding: 10px 15px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#BDAB99' : '#FFF')};
  color: ${({ $isSelected }) => ($isSelected ? '#FFF' : '#000')};
  border: 1px solid #BDAB99;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? '#BDAB99' : '#F7F2EB')};
  }
`;
