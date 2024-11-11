import React from "react";
import PropTypes from "prop-types";
import * as S from "./CakeDesign.style";

const ShapeButton = ({ shape, label, selected, onClick }) => {
  return (
    <S.ShapeButton selected={selected} onClick={onClick}>
      <S.Shape shape={shape} />
      <p>{label}</p>
    </S.ShapeButton>
  );
};

ShapeButton.propTypes = {
  shape: PropTypes.oneOf(["circle", "square", "heart"]).isRequired, // 허용된 모양
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShapeButton;
