import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #CFB7A0;
    padding: 10px 30px 30px 30px;
    margin-top: 22px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostMenu = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const TagSet = styled.div`
    display: flex;
    flex-direction: horizontal;
    align-items: center;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostCategory = styled.p`
    position: relative;
    margin-bottom: 10px;
    background-color: #ffffff;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 16px;
    color: rgba(89, 62, 23, 0.70);
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostTitleSet = styled.div`
    display: flex;
    flex-direction: horizontal;
    justify-content: space-between;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostTitle = styled.h2`
    color: #593E17;
    font-size: 28px;
    font-weight: 600;
    font-family: 'Pretendard-Regular', sans-serif;
    margin: 8px 0px 8px 0px;
`;

export const PostButtonSet = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: horizontal;
    align-items: center;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostListButton = styled.button`
    width: 85px;
    height: 30px;
    border-radius: 24px;
    background-color: #CFB7A0;
    border: 1px solid #CFB7A0;
    color: #fff;
    margin: 5px;
    font-family: 'Pretendard-Regular', sans-serif;

    &:hover {
        background-color: #bfa58f; 
    }
`;

export const EditButton = styled.button`
    width: 95px;
    height: 30px;
    border-radius: 24px;
    background-color: #CFB7A0;
    border: 1px solid #CFB7A0;
    color: #fff;
    margin: 5px;
    font-family: 'Pretendard-Regular', sans-serif;

    &:hover {
        background-color: #bfa58f; 
    }
`;

export const DeleteButton = styled.button`
    width: 95px;
    height: 30px;
    border-radius: 24px;
    background-color: #CFB7A0;
    border: 1px solid #CFB7A0;
    color: #fff;
    margin: 5px;
    font-family: 'Pretendard-Regular', sans-serif;

    &:hover {
        background-color: #bfa58f; 
    }
`;

export const PostLine = styled.hr`
    background-color: #CFB7A0;
    width: 902px;
    height: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
`;

export const PostDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #fff;
    resize: none; /* 크기 조절 비활성화 */
    overflow-y: auto; /* 세로 스크롤 */
    max-height: 460px;
    max-width: 902px;

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: #F7F2EB;
    }
    &::-webkit-scrollbar-thumb {
        background: #CFB7A0;
        border-radius: 6px;
    }
`;

export const PostImageSection = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: left;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostImage = styled.img`
    max-width: 800px;
    max-height: 300px;
    border: 1px solid #CFB7A0;
    border-radius: 5px;
    object-fit: contain;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostText = styled.p`
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    color: #593E17;
`;

export const InfoSet = styled.div`
    font-family: 'Pretendard-Regular', sans-serif;
    display: flex;
    justify-content: space-between;
    flex-direction: horizontal;
    align-items: center;
`;

export const DateSet = styled.div`
    display: flex;
    align-items: horizontal;
`;

export const Date = styled.p`
    display: flex;
    align-items: center;
    margin: 0px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(89, 62, 23, 0.70);
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const StarRate = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    padding-right: 20px;

    .n_star, .f_star {
        color: #593E17;
        font-size: 20px;
        cursor: pointer;
    }
`;

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CommentTitle = styled.h2`
    font-size: 25px;
    font-weight: 600;
    font-family: 'Pretendard-Regular', sans-serif;
    padding-top: 30px;
    margin-bottom: 10px;
    color: #593E17;
`

export const CommentInput = styled.textarea`
    font-family: 'Pretendard-Regular', sans-serif;
    border: 1px solid #593E17;
    border-radius: 16px;
    background-color: #F7F2EB;
    resize: none; /* 크기 조절 비활성화 */
    overflow-y: auto; /* 세로 스크롤 */
    font-size: 16px;
    color: #593E17;
    padding: 10px 18px 10px 10px; /* 오른쪽 여백 추가 */

    &::placeholder {
        color: #593E17;
    }

    &:focus {
        outline: none; 
        border-color: #593E17; /* 클릭 시에도 기존 테두리 색상 유지 */
    }

    /* 스크롤바 스타일 */
    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바 너비 */
        height: 8px; /* 가로 스크롤바 높이 */
        background: #F7F2EB;
        border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background: #CFB7A0;
        border-radius: 6px;
    }
`;

export const CommentButton = styled.button`
    display:flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 30px;
    border-radius: 24px;
    background-color: #CFB7A0;
    border: 1px solid #CFB7A0;
    color: #fff;
    margin: 10px 0px 20px 0px;;
    font-family: 'Pretendard-Regular', sans-serif;

    &:hover {
        background-color: #bfa58f; 
    }
`;

export const PostLightLine = styled.hr`
    background-color: #cccccc;
    width: 902px;
    height: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
`;

export const CommentProfile = styled.div`
    display: flex;
    flex-direction: horizontal;
    padding-top: 10px;
`;

export const Name = styled.p`
    font-size: 15px;
    font-weight: 600;
    font-family: 'Pretendard-Regular', sans-serif;
    align-self: center;
    padding-left: 10px;
    margin: 0px;
`;

export const Img = styled.img`
    width: 30px; /* 프로필 사진의 크기 */
    height: 30px;
    border-radius: 50%; /* 동그란 이미지 */
    object-fit: cover;
`;

export const CommentSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: horizontal;

`;
export const CommentText = styled.p`
    width: 802px;
`;

export const CommentDate = styled.p`
    align-self: flex-end;
`;