import React from 'react';
import { CakeCardContainer, CakeImage, CakeTitle, CakeTime } from './CakeCard.style';

// 카드 데이터 관리
export const cakeData = [
  {
    src: "https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2020/12/%EC%8D%B8_TtGXXjN.jpg",
    title: "연인 생일 케이크",
    time: "2일 전",
  },
  {
    src: "https://media.hicake.cc/media/Zz1POVoHzL_iPRcM4gmvL08cW.jpeg",
    title: "부모님 생신 케이크",
    time: "5일 전",
  },
  {
    src: "https://joocake.com/uploads/products/265/origin/eK7Gm8BYB5CUxvhu3sBctUU1IKzTJ1hpaUKGEmGE.jpeg",
    title: "생일 축하 케이크",
    time: "1주일 전",
  },
  {
    src: "https://joocake.com/uploads/products/258/origin/enfAeLDTxmgVHU4UbxhJ1Lyib9s3ahtFeie6Lo9a.jpeg",
    title: "크리스마스 케이크",
    time: "10일 전",
  },
  {
    src: "https://i.pinimg.com/originals/5d/4a/84/5d4a843628c388a88c0ef38a3e3e4098.jpg",
    title: "졸업 케이크",
    time: "2주 전",
  },
  {
    src: "https://th.bing.com/th/id/OIP.p_PlxWr5lkrKJLCwXTRn2gHaHa?rs=1&pid=ImgDetMain",
    title: "회사 기념 케이크",
    time: "3주 전",
  },
  {
    src: "https://dnvefa72aowie.cloudfront.net/business-profile/bizPlatform/profile/24404777/1713098307199/M2RjY2I1NGI4Y2M4NDRkNGRmNjFhZjUwODlhZTAxMjg3NmQ3ZDcyM2MzYzM1NzUwMWZkZTBjNWI2MGFlYmY0Zl8xLmpwZWc=.jpeg?q=95&s=1440x1440&t=inside",
    title: "결혼 케이크",
    time: "1개월 전",
  },
  {
    src: "https://joocake.com/uploads/products/265/origin/eK7Gm8BYB5CUxvhu3sBctUU1IKzTJ1hpaUKGEmGE.jpeg",
    title: "기념일 케이크",
    time: "2개월 전",
  },
  {
    src: "https://joocake.com/uploads/products/258/origin/enfAeLDTxmgVHU4UbxhJ1Lyib9s3ahtFeie6Lo9a.jpeg",
    title: "특별한 날 케이크",
    time: "3개월 전",
  },
];

const CakeCard = ({ src, title, time }) => {
  return (
    <CakeCardContainer>
      <CakeImage src={src} />
      <CakeTitle>{title}</CakeTitle>
      <CakeTime>{time}</CakeTime>
    </CakeCardContainer>
  );
};

export default CakeCard;
