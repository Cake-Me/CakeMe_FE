import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    height: 55px;
    width: 130px;
    background-color: #CFB7A0;
    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
    border-radius: 15px;
    border: none;
    margin-left: 10px;
    cursor: pointer;
    position: fixed;
    top: 700px;
    right: 30px;
    display: flex; /* 버튼 내부를 flexbox로 설정 */
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: center; /* 가로 중앙 정렬 */
    text-decoration: none;

    &:hover {
        background-color: #bfa58f; /* 호버 시 색상 변경 */
    }
`;