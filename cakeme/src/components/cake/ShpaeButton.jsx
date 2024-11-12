import React from "react";
import PropTypes from "prop-types";
import * as S from "./CakeDesign.style";

const ShapeButton = ({ shape, label, selected, onClick }) => {
  return (
    <S.ShapeButtonContainer selected={selected} onClick={onClick}>
      <S.ShapeIcon shape={shape} />
      <S.ShapeLabel>{label}</S.ShapeLabel> {/* 글씨는 버튼 바깥으로 */}
    </S.ShapeButtonContainer>
  );
};

ShapeButton.propTypes = {
  shape: PropTypes.oneOf(["circle", "square", "heart"]).isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShapeButton;
