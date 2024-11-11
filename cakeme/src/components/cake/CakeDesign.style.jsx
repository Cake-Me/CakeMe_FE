import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
  }
`;

// 전체 컨테이너
export const Container = styled.div`
  text-align: center;
  background-color: #f8f5ee;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  min-height: 100vh; /* 뷰포트 높이에 맞춤 */
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* 추가: 내용 정렬 */
  justify-content: center; /* 추가: 세로 중앙 정렬 */
`;


// 제목
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #8c8577;
`;

// 단계 텍스트
export const Step = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: #6c665c;
`;

// 안내 문구
export const Instruction = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #6c665c;
`;

// 선택 버튼 컨테이너
export const ShapeOptions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

// 모양 버튼
export const ShapeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: 2px dashed #d4cdbf;
  padding: 10px;
  height: 165px;
  width: 165px;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) =>
    props.selected &&
    css`
      background-color: #fffcf7;
      border-color: #6f624f;
      box-shadow: 4px 4px 10px rgba(111, 98, 79, 0.4);
    `}

  &:hover {
    border-color: #a69985;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #6c665c;
  }
`;
export const Shape = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: #d4cdbf;

  ${(props) =>
    props.shape === "circle" &&
    css`
      border-radius: 50%;
    `}

  ${(props) =>
    props.shape === "square" &&
    css`
      /* 사각형은 기본 스타일 */
    `}

  ${(props) =>
    props.shape === "heart" &&
    css`
      width: 80px;
      height: 72px;
      background-color: #d4cdbf;
      clip-path: path(
        "M40 72C20 72 0 48 0 30C0 15 15 0 30 0C40 0 40 12 40 12C40 12 40 0 50 0C65 0 80 15 80 30C80 48 60 72 40 72Z"
      );
    `}
`;







// 버튼 영역
export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// 취소 버튼
export const CancelButton = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #d4cdbf;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #a69985;
  }
`;

// 다음 버튼
export const NextButton = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #8c8577;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6c665c;
  }
`;
