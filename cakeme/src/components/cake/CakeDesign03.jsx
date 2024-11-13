import React, { useState } from "react";
import * as S from "./CakeDesign.style.js";
import { useNavigate } from "react-router-dom"; 


const CakeDesign = () => {
 

  const navigate = useNavigate();

  

  const handleCancel = () => {
    navigate("/cake/2");
  };

  const handleCancel_next = () => {
    navigate("/cake/4");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cake Design</S.Title>
        <S.StepIndicator>
          <S.StepBar $active={true} />
          <S.StepBar $active={true} />
          <S.StepBar $active={true} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
        </S.StepIndicator>
      </S.Header>
      <S.Step>Step 3. 케이크 색상 선택</S.Step>
      <S.Instruction>원하는 케이크 색상을 선택해 주세요.</S.Instruction>
      <S.ShapeOptions>
        
      </S.ShapeOptions>
      <S.ActionButtons>
        <S.CancelButton onClick={handleCancel}>&lt; 이전 질문</S.CancelButton>
        <S.NextButton onClick={handleCancel_next}>다음 질문 &gt;</S.NextButton>
      </S.ActionButtons>
    </S.Container>
  );

};

export default CakeDesign;