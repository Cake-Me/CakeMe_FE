import styled from 'styled-components';

export const DesignCardContainer = styled.div`
    display: flex; 
    flex-direction: column; /* 자식 요소를 수직으로 배치 */
    align-items: center; /* 가로 방향 가운데 정렬 */
    justify-content: center; /* 세로 방향 가운데 정렬 */
    position: relative;

    width: 240px; /* 고정 너비 */
    height: 400px; /* 고정 높이 */

    background-color: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #CFB7A0;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
`;

export const DesignCardImg = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 20px; 
    object-fit: cover;
`;

export const DesignCardTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #593E17;
    width: 170px;
    text-align: center; /* 텍스트 가운데 정렬 */
    margin: 16px 0; /* 위 아래 16px의 균등 여백 */
`;

export const DesignCardText = styled.p`
    color: #757575;
    font-size: 16px;
    font-weight: 400;
    width: 170px;
    text-align: center; /* 텍스트 가운데 정렬 */
    margin-top: 0px; /* 제목과의 간격 */
`;
