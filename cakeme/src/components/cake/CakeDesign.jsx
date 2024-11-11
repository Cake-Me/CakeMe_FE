import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import ShapeButton from "./ShpaeButton.jsx";
import * as S from "./CakeDesign.style.jsx";

const CakeDesign = () => {
  const [selectedShape, setSelectedShape] = useState(""); // 선택된 케이크 모양 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  const handleShapeClick = (shape) => {
    setSelectedShape(shape);
  };

  const handleCancel = () => {
    navigate("/"); // 홈 페이지로 이동
  };

  return (
    <S.Container>
      <S.Title>Cake Design</S.Title>
      <S.Step>step 1. 케이크 모양 선택</S.Step>
      <S.Instruction>원하는 케이크 모양을 선택해 주세요.</S.Instruction>
      <S.ShapeOptions>
        <ShapeButton
          shape="circle"
          label="원형"
          selected={selectedShape === "circle"}
          onClick={() => handleShapeClick("circle")}
        />
        <ShapeButton
          shape="square"
          label="사각형"
          selected={selectedShape === "square"}
          onClick={() => handleShapeClick("square")}
        />
        <ShapeButton
          shape="heart"
          label="하트"
          selected={selectedShape === "heart"}
          onClick={() => handleShapeClick("heart")}
        />
      </S.ShapeOptions>
      <S.ActionButtons>
        <S.CancelButton onClick={handleCancel}>제작 취소</S.CancelButton>
        <S.NextButton>다음 질문 &gt;</S.NextButton>
      </S.ActionButtons>
    </S.Container>
  );
};

export default CakeDesign;
