import styled, { css } from "styled-components";


// 전체 컨테이너
export const Container = styled.div`
flex-grow: 1;
  text-align: center;
  background-color: #f8f5ee;
  border-radius: 10px;
  padding: 10px;
  width: 98%;
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
  margin-top:0px;
  margin-left:5%;
  color: #593E17;
  line-height: 1; 
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
  margin-bottom: 3%;
  color: #676767;
`;
export const ShapeOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center; /* 수직 정렬 */
  margin-bottom: 40px;
`;
// ShapeButton 컴포넌트 스타일 추가
export const ShapeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px; /* 버튼과 테두리 간 여백 */
  border: 2px ${(props) => (props.selected ? "solid" : "dashed")} ${(props) => (props.selected ? "#593E17" : "#6F624F")}; 
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#FFFFFF" : "#FFFCF7")};
  transition: all 0.3s ease;
  position: relative; /* 글씨 위치를 버튼 바깥에 놓기 위해 사용 */

  box-shadow: ${(props) =>
    props.selected
      ? "0px 4px 8px rgba(0, 0, 0, 0.2)" /* 선택된 경우 그림자 */
      : "none"}; /* 선택되지 않았을 경우 그림자 없음 */
  &:hover {
    border-color: #6F624F;
  }
`;


export const ShapeIcon = styled.div`
  width: 120px;
  height: 120px;
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
        aspect-ratio: 1; /* 1:1 비율 */
        width: 120px; /* 하트 너비 */
        height: 120px; /* 하트 높이 */
        background: 
          radial-gradient(at 70% 31%, var(--c) 29%, #0000 30%),
          radial-gradient(at 30% 31%, var(--c) 29%, #0000 30%),
          linear-gradient(var(--c) 0 0) bottom/100% 50% no-repeat;
        clip-path: polygon(-35% 0, 50% 100%, 135% 0);
        transform: scale(1.2); /* 하트를 1.2배 확대 */
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
  margin-top:6%;
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
  margin-top:5px;

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서는 위아래로 정렬 */
    align-items: flex-start; /* 모바일에서 왼쪽 정렬 */
  }
`;

// 단계 표시 컨테이너 (가운데 정렬)
export const StepIndicator = styled.div`
  display: flex;
  gap: 10px; /* 단계 간 간격 */
  justify-content: center;
  align-items: center;
  margin-right: 38%; /* 필요 시 오른쪽 여백 추가 */

  @media (max-width: 768px) {
    margin-right: 0; /* 모바일에서 여백 제거 */
    justify-content: flex-start; /* 모바일에서는 왼쪽 정렬 */
    width: 100%; /* 모바일에서 전체 너비 사용 */
  }
`;


// 단계 바 스타일
export const StepBar = styled.div`
  width: 50px; /* 각 단계의 너비 */
  height: 10px; /* 각 단계의 높이 */
  border-radius: 5px; /* 둥근 모서리 */
  background-color: ${(props) => (props.$active ? "#a0846a" : "#d4cdbf")}; /* 활성화 색상 */
  transition: background-color 0.3s ease;
`;

export const FlavorButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px; /* 버튼과 테두리 간 여백 */
  border: 2px ${(props) => (props.selected ? "solid" : "dashed")} ${(props) => (props.selected ? "#593E17" : "#6F624F")}; 
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#FFFFFF" : "#FFFCF7")};
  transition: all 0.3s ease;
  position: relative; /* 글씨 위치를 버튼 바깥에 놓기 위해 사용 */

  box-shadow: ${(props) =>
    props.selected
      ? "0px 4px 8px rgba(0, 0, 0, 0.2)" /* 선택된 경우 그림자 */
      : "none"}; /* 선택되지 않았을 경우 그림자 없음 */
  &:hover {
    border-color: #6F624F;
  }
`;

export const FlavorImage = styled.img`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlavorLabel = styled.span`
  font-size: 20px;
  color: #000000;
  margin-top: 10px;
  position: absolute;
  top: 100%; /* 버튼 아래로 글씨를 이동 */
  left: 50%;
  transform: translateX(-50%);
`;

// 팔레트와 선택된 색상 전체를 감싸는 컨테이너
export const ColorSelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 5px 0;
  background-color: #f8f5ee;
`;

// SketchPicker와 CirclePicker를 감싸는 컨테이너
export const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 390px;
  height:380px;
   border: 2px solid #6f624f;
  border-radius: 20px;
  padding: 20px;
   background-color: #FFFCF7;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
   margin-left:25%;
`;

// 무지개 Circle 컨테이너
export const RainbowCircle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(red, orange, yellow, green, blue, indigo, violet);
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

`;

// 무지개 Circle 내부의 + 아이콘
export const PlusIcon = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #593e17;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

// SketchPicker 컨테이너
export const SketchPickerWrapper = styled.div`
  position: absolute; /* 부모 요소 기준으로 위치 지정 */
  z-index: 1000; /* 다른 요소보다 위에 렌더링 */
  top: 48%; /* RainbowCircle 아래에 위치 */
  left: 6%; /* 부모 기준 왼쪽 정렬 */
  display: flex;
  flex-direction: column; /* 버튼과 SketchPicker 수직 정렬 */
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background-color: #f8f5ee; /* 배경 흰색 */
  box-shadow: none !important; /* 모든 그림자 제거 */

  width: max-content;

  /* SketchPicker 자체 그림자 제거 */
  .sketch-picker {
    box-shadow: none !important; /* SketchPicker 컴포넌트의 그림자 제거 */
  }

  /* 애니메이션 추가 (선택적으로 적용 가능) */
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


// 선택된 색상 표시 영역
export const SelectedColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 20px;
  background-color: #f8f5ee;
  width: 200px;
  margin-right:20%;
  margin-top:30px;
`;


// 선택된 단일 컬러 박스
export const SelectedColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// 선택된 컬러 표시 박스
export const ColorDisplay = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 20px;
  border: 2px solid #6f624f;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ColorCode = styled.span`
  font-size: 25px;
  color: #000000;
`;

// SketchPicker에서 추가 버튼
export const AddColorButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
    background-color: #FFFCF7;
    color: #000000;
  border: 1px solid #6F624F;
  font-size: 16px;
   border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

   &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;