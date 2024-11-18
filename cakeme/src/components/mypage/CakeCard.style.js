import styled from 'styled-components';

export const CakeCardContainer = styled.div`
  width: 200px;
  text-align: center;
  margin-left: 20px;
`;

export const CakeImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: #efefef;
  border-radius: 10px;
  background-image: url(${(props) => props.src}); /* props로 이미지 경로 전달 */
  background-size: cover; /* 이미지 크기를 컴포넌트에 맞게 조정 */
  background-position: center; /* 이미지 중앙 정렬 */
`;

export const CakeTitle = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const CakeTime = styled.p`
  font-size: 14px;
`;
