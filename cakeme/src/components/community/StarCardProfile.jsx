import React from 'react';
import * as S from './StarCardProfile.style';
import pro1 from '../../assets/community/jjang.jpg';

const StarCardProfile = () => {
    return (
        <S.ProfileContainer>
            <S.ProfileImg src={pro1} alt="Profile" />
            <S.ProfileInfo>
                <S.ProfileName>이채은</S.ProfileName>
                <S.ProfileDate>2024.11.12</S.ProfileDate>
            </S.ProfileInfo>
        </S.ProfileContainer>
    );
};

export default StarCardProfile;
