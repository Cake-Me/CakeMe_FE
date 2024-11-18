import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    height: 43px;
    position: relative;
    width: 823px;
    display: flex;
    align-items: center; /* 가운데 정렬을 위해 추가 */
`;

export const SearchInput = styled.input`
    background-color: #ffffff;
    border: 1px solid #CFB7A0;
    border-radius: 19px;
    height: 42px;
    width: 674px;
    padding: 0 10px;
    
    &::placeholder {
        color: #CFB7A0;
    }

    &:focus {
        outline: none; 
        border-color: #CFB7A0; /* 클릭 시에도 기존 테두리 색상 유지 */
    }
`;

export const SearchButton = styled.button`
    height: 43px;
    width: 118px;
    background-color: #CFB7A0;
    color: #ffffff;
    border-radius: 24px;
    border: none;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
        background-color: #bfa58f; /* 호버 시 색상 변경 */
    }
`;
