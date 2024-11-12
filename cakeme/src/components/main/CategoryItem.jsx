import React from 'react';
import * as S from './Main.style.js'

const CategoryItem = ({ src, alt, text }) => {
  return (
    <S.Item>
      <S.CategotyImage src={src} alt={alt} />
      <S.Text>{text}</S.Text>
    </S.Item>
  );
};

export default CategoryItem;