import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex; /* Flexbox 사용 */
    align-items: center; /* 사진과 텍스트를 수직 가운데 정렬 */
    gap: 10px; /* 사진과 텍스트 간 간격 */
    width: 192px;
    height: 46px;
    margin-left: 20px;
`;

export const ProfileImg = styled.img`
    width: 46px; /* 프로필 사진의 크기 */
    height: 46px;
    border-radius: 50%; /* 동그란 이미지 */
    object-fit: cover; /* 이미지를 컨테이너에 맞게 자르기 */
`;

export const ProfileInfo = styled.div`
    display: flex; /* Flexbox 사용 */
    flex-direction: column; /* 수직 정렬 */
    justify-content: center; /* 텍스트들이 위아래로 정렬 */
    gap: 2px; /* 이름과 날짜 사이의 간격 */
`;

export const ProfileName = styled.p`
    color: #757575;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    margin: 0; /* 기본 마진 제거 */
`;

export const ProfileDate = styled.p`
    color: #757575;
    font-family: "Inter-Regular", Helvetica;
    font-size: 14px; /* 날짜는 이름보다 조금 작게 */
    font-weight: 400;
    margin: 0; /* 기본 마진 제거 */
`;
