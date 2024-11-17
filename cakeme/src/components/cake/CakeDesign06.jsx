import React, { useState, useRef } from "react";
import * as S from "./CakeDesign.style.js";
import { useNavigate } from "react-router-dom"; 

const CakeDesign = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [desiredText, setDesiredText] = useState("");
  const fileInputRef = useRef(null); // input 요소 참조
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // 미리보기 이미지 설정
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (event) => {
    setDesiredText(event.target.value);
  };

  const handleImageClick = () => {
    // input 요소를 클릭
    fileInputRef.current.click();
  };

  const handleCancel = () => {
    navigate("/cake/5");
  };

  const handleNext = () => {
    navigate("/cake/result");
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
          <S.StepBar $active={true} />
        </S.StepIndicator>
      </S.Header>
      <S.Step>Step 6. 원하는 이미지 및 문구 입력</S.Step>
      <S.Instruction>
        케이크 디자인에 반영되었으면 하는 이미지나 넣고 싶은 문구를 입력해 주세요.
      </S.Instruction>

      <S.InputContainer>
        {/* 이미지 업로드 */}
        <S.InputBox onClick={handleImageClick}>
          <S.ImageUploadBox>
            {selectedImage ? (
              <S.PreviewImage src={selectedImage} alt="Uploaded" />
            ) : (
              <span>사진 첨부</span>
            )}
          </S.ImageUploadBox>
          <input
            type="file"
            ref={fileInputRef} // input 요소 참조
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }} // 화면에 표시되지 않음
          />
          <S.InputLabel>원하는 이미지</S.InputLabel>
        </S.InputBox>

        {/* 문구 입력 */}
        <S.InputBox>
          <S.TextArea
            placeholder="한글의 경우 ~자를 넘어가지 않도록 입력 부탁드립니다. 영어의 경우 ~자를 넘어가지 않도록 입력 부탁드립니다."
            value={desiredText}
            onChange={handleTextChange}
          />
          <S.InputLabel>원하는 문구</S.InputLabel>
        </S.InputBox>
      </S.InputContainer>

      <S.ActionButtons>
        <S.CancelButton onClick={handleCancel}>&lt; 이전 질문</S.CancelButton>
        <S.NextButton onClick={handleNext}>디자인 만들기</S.NextButton>
      </S.ActionButtons>
    </S.Container>
  );
};

export default CakeDesign;
