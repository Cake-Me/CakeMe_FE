import styled from 'styled-components';

export const LeftBarContainer = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    padding: 20px;
    gap: 5px; 
    width: 217px;
    height: 454px;
    border-radius: 8px;
    border: 1px solid #CFB7A0;
`;

export const TitleSet = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
`;

export const LeftSemiTitle = styled.h3`
    color: rgba(120, 60, 3, 0.60);
    font-weight: 400;
    font-size: 15px;
    margin: 0;
`;

export const LeftTitle = styled.h2`
    color: #593E17;
    font-weight: 600;
    font-size: 18px;
    padding-top: 3px;
    margin: 0;
`;

export const Line = styled.hr`
    border: none;
    height: 1px;
    background-color: rgba(120, 60, 3, 0.60);
    width: 100%;
    margin: 10px 0;
`;

export const Post = styled.div`
    background-color: #fff;
    display: flex;
    align-items: flex-start; 
    padding: 10px 0px 10px 0px;
    gap: 10px;
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const PostTitle = styled.p`
    color: #593E17;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
`;

export const PostCategory = styled.p`
    color: rgba(120, 60, 3, 0.60);
    font-size: 16px;
    font-weight: 400;
    margin: 0;
`;

export const StarSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .n_star, .f_star {
        color: #593E17;
        font-size: 20px;
        cursor: pointer;
    }
`;
