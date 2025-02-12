import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  width: 100%; /* 부모 컨테이너의 가로 크기를 채움 */
  padding: 10px; /* 적절한 패딩 추가 */
  gap: 20px; /* 그룹 간 간격 */
`;

export const LeftGroup = styled.div`
  display: flex; /* Flexbox 사용 */
  align-items: center; /* 세로 가운데 정렬 */
  gap: 8px; /* 화살표와 텍스트 사이 간격 */
`;

export const LeftButton = styled.button`
  font-size: 16px;
  margin: 0;
  background-color: #F7F2EB;
  color: #555;
  font-weight: bold;
  border: 1px solid #F7F2EB;
  border-radius: 8px; 
  cursor: pointer;

  &:disabled {
    color: #CCC;
    cursor: not-allowed;
  }
`;

export const RightGroup = styled.div`
  display: flex; 
  align-items: center; 
  gap: 8px; 
`;

export const RightButton = styled(LeftButton)``;

/* 숫자 버튼 컨테이너 */
export const NumberButtons = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 10px;
`;

/* 개별 숫자 버튼 */
export const Button = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${(isActive) => (isActive ? '#CFB7A0' : '#F7F2EB')}; /* 활성화된 버튼 색상 */
  color: ${(isActive) => (isActive ? '#FFF' : '#555')};
  font-size: 16px;
  font-weight: bold;
  border: 1px solid ${(isActive) => (isActive ? '#CFB7A0' : '#F7F2EB')}; 
  border-radius: 8px; 
  cursor: pointer;

  &:hover {
    background-color: ${(isActive) => (isActive ? '#CFB7A0' : '#e0d4c1')}; 
    color: #FFF;
  }

  &:active {
    background-color: #CFB7A0; 
    color: #FFF;
  }
`;
