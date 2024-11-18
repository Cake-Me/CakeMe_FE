import React from 'react';
import { UserNameGroup, UserIdGroup, UserGroup, UserInfoContainer, ProfileImage, UserInfoDetails, UserName1,UserName2, UserId1,UserId2, ButtonGroup, Button } from './UserInfo.style';

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserGroup>
        <ProfileImage />
        <UserInfoDetails>
          <UserNameGroup>
            <UserName1>Username</UserName1>
            <UserName2>김컴공</UserName2>
          </UserNameGroup>
          <UserIdGroup>
            <UserId1>ID</UserId1>
            <UserId2>dswucse</UserId2>
          </UserIdGroup>
        </UserInfoDetails>
      </UserGroup>

      <ButtonGroup>
        <Button>프로필 이미지 변경</Button>
        <Button>Username 변경</Button>
        <Button>Password 변경</Button>
      </ButtonGroup>
    </UserInfoContainer>
  );
};

export default UserInfo;
