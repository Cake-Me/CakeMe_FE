import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #CFB7A0;
    padding: 30px;
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

export const PostCategory = styled.div`
    position: relative;
    width: 80px;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    justify-content: flex-start;
    border: 1px solid #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 16px;
    color: rgba(89, 62, 23, 0.70);
    font-family: 'Pretendard-Regular', sans-serif;

    &::before {
        content: "⌵";
        position: absolute;
        align-self: center;
        top: 0px;
        right: 8px;
        color: rgba(89, 62, 23, 0.70);
        font-size: 20px;
    }
`;

export const DropdownMenu = styled.ul`
    position: absolute;
    top: 195px;
    left: 540px;
    width: 80px;
    max-height: 190px;
    background-color: #fff;
    border: 1px solid #CFB7A0;
    border-radius: 8px;
    list-style: none;
    padding: 5px 0;
    margin: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
    overflow-y: auto;
    font-family: 'Pretendard-Regular', sans-serif;

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

export const DropdownItem = styled.li`
    padding: 10px;
    font-size: 14px;
    color: rgba(89, 62, 23, 0.70);
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: 'Pretendard-Regular', sans-serif;

    &:hover {
        background-color: #F7F2EB;
    }
`;

export const PostTitleSet = styled.div`
    display: flex;
    flex-direction: horizontal;
    justify-content: space-between;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostTitleInput = styled.input`
    border: 1px solid #fff;
    background-color: #fff;
    width: 600px;
    color: #593E17;
    font-size: 28px;
    font-weight: 600;
    font-family: 'Pretendard-Regular', sans-serif;

    &::placeholder {
        color: rgba(89, 62, 23, 0.70);
    }

    &:focus {
        outline: none; 
        border-color: #fff; /* 클릭 시에도 기존 테두리 색상 유지 */
    }
`;

export const PostButtonSet = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: horizontal;
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

export const CancelButton = styled.button`
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

export const PostButton = styled.input`
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

export const PostTextInput = styled.textarea`
    font-family: 'Pretendard-Regular', sans-serif;
    border: 1px solid #fff;
    resize: none; /* 크기 조절 비활성화 */
    overflow-y: auto; /* 세로 스크롤 */
    font-size: 16px;
    color: #593E17;

    &::placeholder {
        color: rgba(89, 62, 23, 0.70);
    }

    &:focus {
        outline: none; 
        border-color: #fff; /* 클릭 시에도 기존 테두리 색상 유지 */
    }

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

export const PreviewContainer = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: left;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PreviewImage = styled.img`
    max-width: 800px;
    max-height: 300px;
    border: 1px solid #CFB7A0;
    border-radius: 5px;
    object-fit: contain;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PicSet = styled.div`
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const TitleSet = styled.div`
    display: flex;
    flex-direction: horizontal;
    padding-bottom: 10px;
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PicTitle = styled.p`
    margin: 0px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(89, 62, 23, 0.70);
    font-family: 'Pretendard-Regular', sans-serif;
`;

export const PostPic = styled.input`
    padding-bottom: 60px;
    font-family: 'Pretendard-Regular', sans-serif;
`;
