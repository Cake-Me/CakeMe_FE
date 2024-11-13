import React from "react";
import PropTypes from "prop-types";
import * as S from "./CakeDesign.style";

const FlavorButton = ({ label, image, selected, onClick }) => {
  return (
    <S.FlavorButtonContainer selected={selected} onClick={onClick}>
      <S.FlavorImage src={image} alt={label} /> {/* 이미지 추가 */}
      <S.FlavorLabel>{label}</S.FlavorLabel>
    </S.FlavorButtonContainer>
  );
};

FlavorButton.propTypes = {
  label: PropTypes.string.isRequired, // 맛 이름
  image: PropTypes.string.isRequired, // 이미지 경로 추가
  selected: PropTypes.bool.isRequired, // 선택 여부
  onClick: PropTypes.func.isRequired, // 클릭 이벤트
};

export default FlavorButton;

