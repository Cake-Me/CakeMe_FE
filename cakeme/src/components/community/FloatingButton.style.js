import styled from 'styled-components';


export const Button = styled.button`
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

    &:hover {
        background-color: #bfa58f; /* 호버 시 색상 변경 */
    }
`;