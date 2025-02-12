import  { useState } from 'react';
import * as S from './LeftBar.style';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

const LeftBar = () => {
    const [stars, setStars] = useState([false, false, false, false, false]); // 5개의 상태 관리

    const toggleStar = (index) => {
        setStars((prevStars) =>
            prevStars.map((star, i) => (i === index ? !star : star))
        );
    };

    const postTitle = '생일케이크크크크크크크';

    const navigate = useNavigate();

    const handleDetail = () => {
        navigate("/community/detail${post?.id || ''}");
    };

    return (
        <S.LeftBarContainer>
            <S.TitleSet>
                <S.LeftSemiTitle>현재 인기글</S.LeftSemiTitle>
                <S.LeftTitle>케이크 디자인</S.LeftTitle>
            </S.TitleSet>
            <S.Line></S.Line>
            {stars.map((star, index) => (
                <S.Post key={index} onClick={handleDetail}>
                    <S.StarSection>
                        {star ? (
                            <FaStar
                                className="f_star"
                                onClick={() => toggleStar(index)}
                            />
                        ) : (
                            <FaRegStar
                                className="n_star"
                                onClick={() => toggleStar(index)}
                            />
                        )}
                    </S.StarSection>
                    <S.PostInfo>
                        <S.PostTitle>{truncateText(postTitle, 9)}</S.PostTitle>
                        <S.PostCategory>생일</S.PostCategory>
                    </S.PostInfo>
                </S.Post>
            ))}
        </S.LeftBarContainer>
    );
};

export default LeftBar;
