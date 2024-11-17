import React, { useState } from "react";
import styled from 'styled-components';
import * as S from "./CakeDesign.style.js";
import { useNavigate } from "react-router-dom"; 

const CakeDesignResult = () => {
    const [selectedDesign, setSelectedDesign] = useState(null);
    const navigate = useNavigate();
  
    const handleDesignClick = (design) => {
      setSelectedDesign(design);
    };
  
    const handleRetry = () => {
      // 다시 추천받기 동작 처리
      console.log("다시 추천받기 클릭됨");
      navigate("/cake/result");
    }; 
  
    const handleConfirm = () => {
      // 디자인 확정 동작 처리
      console.log("디자인 확정: ", selectedDesign);
      navigate("/");
    };
  
    return (
      <S.Container>
        <S.Title07>Cake Design 추천 결과</S.Title07>
        <S.DesignOptions07>
          <S.DesignCard
            selected={selectedDesign === "design1"}
            onClick={() => handleDesignClick("design1")}
          >
            <S.DesignImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9NVHjF6m5egfOjmltq8wBMbDrTX57_L9Lg&s"} alt="Design 1" />
            <S.DesignLabel>Design 1</S.DesignLabel>
          </S.DesignCard>
          <S.DesignCard
            selected={selectedDesign === "design2"}
            onClick={() => handleDesignClick("design2")}
          >
            <S.DesignImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9NVHjF6m5egfOjmltq8wBMbDrTX57_L9Lg&s"} alt="Design 2" />
            <S.DesignLabel>Design 2</S.DesignLabel>
          </S.DesignCard>
          <S.DesignCard
            selected={selectedDesign === "design3"}
            onClick={() => handleDesignClick("design3")}
          >
            <S.DesignImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9NVHjF6m5egfOjmltq8wBMbDrTX57_L9Lg&s"} alt="Design 3" />
            <S.DesignLabel>Design 3</S.DesignLabel>
          </S.DesignCard>
        </S.DesignOptions07>
        <S.ActionButtons>
            <S.CancelButton onClick={handleRetry}>다시 추천받기</S.CancelButton>
            <S.NextButton onClick={handleConfirm}>디자인 확정</S.NextButton>
        </S.ActionButtons>
      </S.Container>
    );
  };
  
export default CakeDesignResult;