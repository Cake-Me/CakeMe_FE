import React from 'react';
import CategoryItem from './CategoryItem';
import * as S from './Main.style.js'

const items = [
    {
      src: "https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2020/12/%EC%8D%B8_TtGXXjN.jpg",
      alt: "연인",
      text: "연인",
    },
    {
      src: "https://media.hicake.cc/media/Zz1POVoHzL_iPRcM4gmvL08cW.jpeg",
      alt: "부모님",
      text: "부모님",
    },
    {
      src: "https://joocake.com/uploads/products/265/origin/eK7Gm8BYB5CUxvhu3sBctUU1IKzTJ1hpaUKGEmGE.jpeg",
      alt: "생일",
      text: "생일",
    },
    {
      src: "https://joocake.com/uploads/products/258/origin/enfAeLDTxmgVHU4UbxhJ1Lyib9s3ahtFeie6Lo9a.jpeg",
      alt: "크리스마스",
      text: "크리스마스",
    },
    {
      src: "https://i.pinimg.com/originals/5d/4a/84/5d4a843628c388a88c0ef38a3e3e4098.jpg",
      alt: "졸업",
      text: "졸업",
    },
    {
      src: "https://th.bing.com/th/id/OIP.p_PlxWr5lkrKJLCwXTRn2gHaHa?rs=1&pid=ImgDetMain",
      alt: "회사",
      text: "회사",
    },
    {
      src: "https://dnvefa72aowie.cloudfront.net/business-profile/bizPlatform/profile/24404777/1713098307199/M2RjY2I1NGI4Y2M4NDRkNGRmNjFhZjUwODlhZTAxMjg3NmQ3ZDcyM2MzYzM1NzUwMWZkZTBjNWI2MGFlYmY0Zl8xLmpwZWc=.jpeg?q=95&s=1440x1440&t=inside",
      alt: "결혼",
      text: "결혼",
    },
  ];

const CategoryList = () => {
  return (
    <S.List>
      <S.Wrapper>
        {Array(2)
          .fill(items)
          .flat()
          .map((item, index) => (
            <CategoryItem key={index} src={item.src} alt={item.alt} text={item.text} />
          ))}
      </S.Wrapper>
    </S.List>
  );
};

export default CategoryList;