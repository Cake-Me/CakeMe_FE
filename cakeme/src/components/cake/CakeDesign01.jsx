import React, { useState } from "react";
import ShapeButton from "./ShpaeButton.jsx";
import * as S from "./CakeDesign.style.jsx";
import { useNavigate } from "react-router-dom"; 

const CakeDesign = () => {
  const [selectedShape, setSelectedShape] = useState("");
  const navigate = useNavigate();

  const handleShapeClick = (shape) => {
    setSelectedShape(shape);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cake Design</S.Title>
        <S.StepIndicator>
          <S.StepBar $active={true} /> {/* 활성화된 단계 */}
          <S.StepBar $active={false} /> {/* 비활성화된 단계 */}
          <S.StepBar $active={false}/>
          <S.StepBar $active={false}/>
          <S.StepBar $active={false}/>
          <S.StepBar $active={false}/>
        </S.StepIndicator>
      </S.Header>
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

