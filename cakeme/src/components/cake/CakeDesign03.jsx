import React, { useState } from "react";
import { CirclePicker, SketchPicker } from "react-color";
import * as S from "./CakeDesign.style.js";
import { useNavigate } from "react-router-dom";

const CakeDesign = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [showSketchPicker, setShowSketchPicker] = useState(false);
  const [customColor, setCustomColor] = useState("#FFFFFF");
  const navigate = useNavigate();

  const handleColorChange = (color) => {
    if (selectedColors.length < 2) {
      setSelectedColors((prev) => [...prev, color.hex]);
    } else {
      setSelectedColors([selectedColors[1], color.hex]);
    }
  };

  const handleCustomColorChange = (color) => {
    setCustomColor(color.hex);
  };

  const handleAddCustomColor = () => {
    if (selectedColors.length < 2) {
      setSelectedColors((prev) => [...prev, customColor]);
    } else {
      setSelectedColors([selectedColors[1], customColor]);
    }
    setShowSketchPicker(false);
  };

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
      <S.Instruction>원하는 케이크 색상을 선택해주세요.</S.Instruction>
      
      <S.ColorSelectionContainer>
        <S.PickerContainer>
          <S.RainbowCircle onClick={() => setShowSketchPicker(!showSketchPicker)}>
            <S.PlusIcon>+</S.PlusIcon>
          </S.RainbowCircle>
          {showSketchPicker && (
            <S.SketchPickerWrapper>
              <SketchPicker
                color={customColor}
                onChange={handleCustomColorChange}
              />
              <S.AddColorButton onClick={handleAddCustomColor}>
                색상 추가
              </S.AddColorButton>
            </S.SketchPickerWrapper>
          )}
          <CirclePicker
  colors={[
    "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
    "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
    "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800",
    "#FF5722", "#795548", "#9E9E9E", "#607D8B","#000000",
  ]} // 원하는 색상 배열
  onChange={handleColorChange}
  circleSize={50} 
  circleSpacing={10} 
/>
        </S.PickerContainer>

        {/* 선택된 색상 표시 */}
        <S.SelectedColorsContainer>
          {selectedColors.map((selectedColor, index) => (
            <S.SelectedColor key={index}>
              <S.ColorDisplay style={{ backgroundColor: selectedColor }} />
              <S.ColorCode>{selectedColor}</S.ColorCode>
            </S.SelectedColor>
          ))}
        </S.SelectedColorsContainer>
      </S.ColorSelectionContainer>
      
      <S.ActionButtons>
        <S.CancelButton onClick={handleCancel}>&lt; 이전 질문</S.CancelButton>
        <S.NextButton onClick={handleCancel_next}>다음 질문 &gt;</S.NextButton>
      </S.ActionButtons>
    </S.Container>
  );
};

export default CakeDesign;
