import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  // display: flex;
  // align-items: center;
  margin-bottom: 20px;
  
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
  margin-top: 20px;
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #FFF;
  border: 1px solid #BDAB99;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #BDAB99;
  }
`;
