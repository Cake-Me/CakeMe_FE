import styled, { css } from "styled-components";


// 전체 컨테이너
export const Container = styled.div`
flex-grow: 1;
  text-align: center;
  background-color: #f8f5ee;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  height:100%;
  margin: 0 auto;
  display: flex;
  overflow-y: auto;
  flex-direction: column; /* 추가: 내용 정렬 */
  padding-bottom: 12%;
`;


// 제목 스타일 (왼쪽 정렬 유지)
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-left:50px;
  color: #593E17;

`;

// 단계 텍스트
export const Step = styled.p`
  font-size: 40px;
  margin-bottom: 5px;
  color: #000000;
`;

// 안내 문구
export const Instruction = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  color: #676767;
`;
export const ShapeOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center; /* 수직 정렬 */
  margin-bottom: 30px;
`;
// ShapeButton 컴포넌트 스타일 추가
export const ShapeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px; /* 버튼과 테두리 간 여백 */
  border: 2px dashed ${(props) => (props.selected ? "#593E17" : "#6F624F")}; 
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#FFFFFF" : "#FFFCF7")};
  transition: all 0.3s ease;
  position: relative; /* 글씨 위치를 버튼 바깥에 놓기 위해 사용 */
/* 선택되었을 때 그림자 추가 */
  box-shadow: ${(props) =>
    props.selected
      ? "0px 4px 8px rgba(0, 0, 0, 0.2)" /* 선택된 경우 그림자 */
      : "none"}; /* 선택되지 않았을 경우 그림자 없음 */
  &:hover {
    border-color: #6F624F;
  }
`;

export const ShapeIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CFB7A0;

  ${(props) =>
    props.shape === "circle" &&
    css`
      border-radius: 50%;
    `}
  ${(props) =>
    props.shape === "square" &&
    css`
      border-radius: 8px; /* 사각형 둥근 모서리 설정 */
    `}
    ${(props) =>
      props.shape === "heart" &&
      css`
        --c: #CFB7A0; /* 하트 색상 */
        width: 80px;
        height: 80px;
        aspect-ratio: 1; /* 1:1 비율 */
        background: 
          radial-gradient(at 70% 31%, var(--c) 29%, #0000 30%),
          radial-gradient(at 30% 31%, var(--c) 29%, #0000 30%),
          linear-gradient(var(--c) 0 0) bottom/100% 50% no-repeat;
        clip-path: polygon(-43% 0, 50% 91%, 143% 0);
      `}
`;

export const ShapeLabel = styled.p`
  font-size: 20px;
  color: #000000;
  margin-top: 10px;
  position: absolute;
  top: 100%; /* 버튼 아래로 글씨를 이동 */
  left: 50%;
  transform: translateX(-50%);
`;



// 버튼 영역
export const ActionButtons = styled.div`
  display: flex;
  justify-content: center; /* 버튼을 중앙 정렬 */
  gap: 30%; /* 버튼 사이 간격 설정 */
  margin-top: 20px;
`;

// 취소 버튼
export const CancelButton = styled.button`
  border: 1px solid #6F624F;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #FFFCF7;
  color: #000000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

// 다음 버튼
export const NextButton = styled.button`
  border: 1px solid #6F624F;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #FFFCF7;
  color: #000000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;


// Header 스타일
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 제목은 왼쪽, 단계 바는 오른쪽 */
  width: 100%;
`;



// 단계 표시 컨테이너 (가운데 정렬)
export const StepIndicator = styled.div`
  display: flex;
  gap: 10px; /* 단계 간 간격 */
  justify-content: center;
  align-items: center;
  margin-right: 40%; /* 필요 시 오른쪽 여백 추가 */
`;

// 단계 바 스타일
export const StepBar = styled.div`
  width: 50px; /* 각 단계의 너비 */
  height: 10px; /* 각 단계의 높이 */
  border-radius: 5px; /* 둥근 모서리 */
  background-color: ${(props) => (props.$active ? "#a0846a" : "#d4cdbf")}; /* 활성화 색상 */
  transition: background-color 0.3s ease;
`;