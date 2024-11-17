import React from "react";
import PropTypes from "prop-types";
import * as S from "./CakeDesign.style";

const SituationButton = ({ label, image, selected, onClick }) => {
  return (
    <S.SituationButtonContainer selected={selected} onClick={onClick}>
      <S.SituationImage src={image} alt={label} /> {/* 이미지 추가 */}
      <S.SituationLabel>{label}</S.SituationLabel>
    </S.SituationButtonContainer>
  );
};

SituationButton.propTypes = {
  label: PropTypes.string.isRequired, // 맛 이름
  image: PropTypes.string.isRequired, // 이미지 경로 추가
  selected: PropTypes.bool.isRequired, // 선택 여부
  onClick: PropTypes.func.isRequired, // 클릭 이벤트
};

export default SituationButton;

