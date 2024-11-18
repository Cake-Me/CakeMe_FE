import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  // display: flex;
  // align-items: center;
  margin-bottom: 20px;
  // justify-content: center;
  margin-left:15px;
`;

export const ProfileImage = styled.div`
  width: 140px;
  height: 140px;
  background-color: #C4C4C4;
  border-radius: 50%;
  background-image: url('src/assets/mypage/profileimage.png'); /* 원하는 이미지 경로 */
  background-size: cover; /* 이미지 크기를 컴포넌트에 맞게 조정 */
  background-position: center; /* 이미지 중앙 정렬 */
`;

export const UserInfoDetails = styled.div`
  margin-left: 20px;
`;

export const UserNameGroup = styled.div`
  display: flex; /* 같은 줄에 배치 */
  align-items: center; /* 수직 정렬 */
  gap: 10px; /* 요소 간격 */
  margin-top: 10px;
`;

export const UserGroup = styled.div`
  display: flex; /* 같은 줄에 배치 */
  align-items: center; /* 수직 정렬 */
  gap: 10px; /* 요소 간격 */
  margin-top: 10px;
`;


export const UserName1 = styled.h2`
  color: #593E17;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const UserName2 = styled.h2`
  color: #704E2E;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const UserIdGroup = styled.div`
  display: flex; /* 같은 줄에 배치 */
  align-items: center; /* 수직 정렬 */
  gap: 10px; /* 요소 간격 */
  // margin-top: 5px;
`;

export const UserId1 = styled.p`
  color: #593E17;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const UserId2 = styled.p`
  color: #704E2E;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ButtonGroup = styled.div`
  display: flex; /* Flexbox 활성화 */
  justify-content: center; /* 가로 중앙 정렬 */
  gap: 50px; /* 버튼 간 간격 */
  margin-top: 20px;
  // margin-left : 10px;
`;


export const Button = styled.button`
  height: 38px;
  width: 208px;
  background-color: #cfb7a0;
  color: #f7f2eb;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bdab99;
  }
`;

