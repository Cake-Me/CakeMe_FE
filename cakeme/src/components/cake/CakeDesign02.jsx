import React, { useState } from "react";
import FlavorButton from "./FlavorButton.jsx";
import * as S from "./CakeDesign.style.js";
import { useNavigate } from "react-router-dom"; 
import choco from "../../assets/image/choco.png";
import cream from "../../assets/image/cream.png";
import cookie from "../../assets/image/cookie.png";
import berry from "../../assets/image/berry.png";


const CakeDesign = () => {
 
  const [selectedFlavor, setSelectedFlavor] = useState(""); 
  const navigate = useNavigate();

  const handleFlavorClick = (flavor) => {
    setSelectedFlavor(flavor);
  };

  const handleCancel = () => {
    navigate("/cake/1");
  };

  const handleCancel_next = () => {
    navigate("/cake/3");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cake Design</S.Title>
        <S.StepIndicator>
          <S.StepBar $active={true} />
          <S.StepBar $active={true} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
        </S.StepIndicator>
      </S.Header>
      <S.Step>Step 2. 케이크 맛 선택</S.Step>
      <S.Instruction>원하는 케이크 맛을 선택해 주세요.</S.Instruction>
      <S.ShapeOptions>
        <FlavorButton
          label="초코"
          image={choco}
          selected={selectedFlavor === "초코"}
          onClick={() => handleFlavorClick("초코")}
        />
        <FlavorButton
          label="생크림"
          image={cream}
          selected={selectedFlavor === "생크림"}
          onClick={() => handleFlavorClick("생크림")}
        />
        <FlavorButton
          label="쿠앤크"
          image={cookie}
          selected={selectedFlavor === "쿠앤크"}
          onClick={() => handleFlavorClick("쿠앤크")}
        />
        <FlavorButton
          label="딸기"
          image={berry}
          selected={selectedFlavor === "딸기"}
          onClick={() => handleFlavorClick("딸기")}
        />
      </S.ShapeOptions>
      <S.ActionButtons>
        <S.CancelButton onClick={handleCancel}>&lt; 이전 질문</S.CancelButton>
        <S.NextButton onClick={handleCancel_next}>다음 질문 &gt;</S.NextButton>
      </S.ActionButtons>
    </S.Container>
  );

};

export default CakeDesign;