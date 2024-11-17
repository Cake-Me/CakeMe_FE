import React, { useState } from "react";
import SituationButton from "./SituationButton.jsx";
import * as S from "./CakeDesign.style.js";
import { useNavigate } from "react-router-dom"; 
import cute from "../../assets/image/cute.png";
import fancy from "../../assets/image/fancy.png";
import simple from "../../assets/image/simple.png";
import wonderful from "../../assets/image/wonderful.png";

import romantic from "../../assets/image/romantic.png";
import unique from "../../assets/image/unique.png";
import dreamlike from "../../assets/image/dreamlike.png";
import tale from "../../assets/image/tale.png";


const CakeDesign = () => {
 
  const [selectedSituation, setSelectedSituation] = useState(""); 
  const navigate = useNavigate();

  const handleSituationClick = (situation) => {
    setSelectedSituation(situation);
  };

  const handleCancel = () => {
    navigate("/cake/4");
  };

  const handleCancel_next = () => {
    navigate("/cake/6");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cake Design</S.Title>
        <S.StepIndicator>
          <S.StepBar $active={true} />
          <S.StepBar $active={true} />
          <S.StepBar $active={true} />
          <S.StepBar $active={true} />
          <S.StepBar $active={true} />
          <S.StepBar $active={false} />
        </S.StepIndicator>
      </S.Header>
      <S.Step>Step 5. 디자인 분위기 선택</S.Step>
      <S.Instruction>원하는 케이크 디자인의 분위기를 선택해 주세요.</S.Instruction>



      <S.InputContainer04>
        <S.InputBox04>
          <S.TextArea04
            placeholder="더 자세하게 설명해주세요!"
            rows="5"
            onChange={(e) => setSelectedSituation(e.target.value)}
            value={selectedSituation}
          />
          <S.InputLabel>직접 입력</S.InputLabel>
        </S.InputBox04>

        <S.DesignOptions>
          <SituationButton
            label="귀여운"
            image={cute}
            selected={selectedSituation === "귀여운"}
            onClick={() => handleSituationClick("귀여운")}
          />
          <SituationButton
            label="화려한"
            image={fancy}
            selected={selectedSituation === "화려한"}
            onClick={() => handleSituationClick("화려한")}
          />
          <SituationButton
            label="심플한"
            image={simple}
            selected={selectedSituation === "심플한"}
            onClick={() => handleSituationClick("심플한")}
          />
          <SituationButton
            label="멋진"
            image={wonderful}
            selected={selectedSituation === "멋진"}
            onClick={() => handleSituationClick("멋진")}
          />


          <SituationButton
            label="로멘틱"
            image={romantic}
            selected={selectedSituation === "로멘틱"}
            onClick={() => handleSituationClick("로멘틱")}
          />
          <SituationButton
            label="유니크한"
            image={unique}
            selected={selectedSituation === "유니크한"}
            onClick={() => handleSituationClick("유니크한")}
          />
          <SituationButton
            label="몽환적인"
            image={dreamlike}
            selected={selectedSituation === "몽환적인"}
            onClick={() => handleSituationClick("몽환적인")}
          />
          <SituationButton
            label="동화같은"
            image={tale}
            selected={selectedSituation === "동화같은"}
            onClick={() => handleSituationClick("동화같은")}
          />
        </S.DesignOptions>

      </S.InputContainer04>
      <S.ActionButtons>
        <S.CancelButton onClick={handleCancel}>&lt; 이전 질문</S.CancelButton>
        <S.NextButton onClick={handleCancel_next}>다음 질문 &gt;</S.NextButton>
      </S.ActionButtons>
    </S.Container>
  );

};

export default CakeDesign;