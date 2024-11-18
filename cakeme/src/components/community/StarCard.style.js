import styled from 'styled-components';

export const StarContainer = styled.div`
    align-items: flex-start;
    background-color: #FFFFFF;

    border-radius:8px;
    display: inline-flex;
    flex-direction: column;
    min-width: 240px;
    min-height: 212px;
    position:relative;
    border: 1px solid #CFB7A0;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
`;

export const StarSection = styled.div`
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    gap: 5px;
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 20px;


    .n_star, .f_star {
        color: #593E17;
        font-size: 20px;
        cursor: pointer;
    }
`;

export const StarCardTitle = styled.h3`
    align-items: flex-start;
    display: inline-flex;
    position: relative;
    width: fit-content;
    color: #593E17;
    margin-bottom: 5px;
    margin-left: 20px;
`;

export const StarCardCategory = styled.p`
    align-items: flex-start;
    display: inline-flex;
    position: relative;
    width: fit-content;
    color: #593E17;
    margin-top: 0px;
    margin-bottom: 30px;
    margin-left: 20px;
`;