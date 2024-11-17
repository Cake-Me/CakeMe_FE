import React, { useState } from "react";
import SituationButton from "./SituationButton.jsx";
import * as S from "./CakeDesign.style.js";
import { useNavigate } from "react-router-dom"; 
import birthday from "../../assets/image/birthday.png";
import love from "../../assets/image/love.png";
import friend from "../../assets/image/friend.png";
import parents from "../../assets/image/parents.png";
import teacher from "../../assets/image/teacher.png";

import X_mas from "../../assets/image/X_mas.png";
import graduation from "../../assets/image/graduation.png";
import company from "../../assets/image/company.png";
import marriage from "../../assets/image/marriage.png";
import child from "../../assets/image/child.png";


const CakeDesign = () => {
 
  const [selectedSituation, setSelectedSituation] = useState(""); 
  const navigate = useNavigate();

  const handleSituationClick = (situation) => {
    setSelectedSituation(situation);
  };

  const handleCancel = () => {
    navigate("/cake/3");
  };

  const handleCancel_next = () => {
    navigate("/cake/5");
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
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
        </S.StepIndicator>
      </S.Header>
      <S.Step>Step 4. 상황 선택</S.Step>
      <S.Instruction>케이크를 제작하고자 하는 상황을 선택해 주세요.</S.Instruction>



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

        <S.SituationOptions>
          <SituationButton
            label="생일"
            image={birthday}
            selected={selectedSituation === "생일"}
            onClick={() => handleSituationClick("생일")}
          />
          <SituationButton
            label="연인"
            image={love}
            selected={selectedSituation === "연인"}
            onClick={() => handleSituationClick("연인")}
          />
          <SituationButton
            label="친구"
            image={friend}
            selected={selectedSituation === "친구"}
            onClick={() => handleSituationClick("친구")}
          />
          <SituationButton
            label="부모님"
            image={parents}
            selected={selectedSituation === "부모님"}
            onClick={() => handleSituationClick("부모님")}
          />
          <SituationButton
            label="선생님"
            image={teacher}
            selected={selectedSituation === "선생님"}
            onClick={() => handleSituationClick("선생님")}
          />


          <SituationButton
            label="X-mas"
            image={X_mas}
            selected={selectedSituation === "X-mas"}
            onClick={() => handleSituationClick("X-mas")}
          />
          <SituationButton
            label="졸업"
            image={graduation}
            selected={selectedSituation === "졸업"}
            onClick={() => handleSituationClick("졸업")}
          />
          <SituationButton
            label="회사"
            image={company}
            selected={selectedSituation === "회사"}
            onClick={() => handleSituationClick("회사")}
          />
          <SituationButton
            label="결혼"
            image={marriage}
            selected={selectedSituation === "결혼"}
            onClick={() => handleSituationClick("결혼")}
          />
          <SituationButton
            label="아이"
            image={child}
            selected={selectedSituation === "아이"}
            onClick={() => handleSituationClick("아이")}
          />
        </S.SituationOptions>

      </S.InputContainer04>
      <S.ActionButtons>
        <S.CancelButton onClick={handleCancel}>&lt; 이전 질문</S.CancelButton>
        <S.NextButton onClick={handleCancel_next}>다음 질문 &gt;</S.NextButton>
      </S.ActionButtons>
    </S.Container>
  );

};

export default CakeDesign;