import PropTypes from 'prop-types'; // ✅ PropTypes 추가
import * as S from './DesignCard.style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";  
import cake from '../../assets/community/cake.jpeg';


const truncateText = (text, maxLength) => {
    return text && text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const DesignCard = ({ post }) => {
    const navigate = useNavigate();

    useEffect(() => {
        //console.log("📌 현재 상태에 저장된 posts:", post); // 🔥 상태 변화 감지
    }, [post]);
    

    const handleDetail = () => {
        navigate(`/community/detail/${post?.id || ''}`);
    };

    return (
        <S.DesignCardContainer onClick={handleDetail}>
            <S.DesignCardImg 
                src={post?.attachment ||cake} 
                alt="게시글 이미지"
            />
            <S.DesignCardTitle>{truncateText(post?.title || '제목 없음', 9)}</S.DesignCardTitle>
            <S.DesignCardText>{truncateText(post?.content || '내용 없음', 72)}</S.DesignCardText>
        </S.DesignCardContainer>
    );
};

// ✅ PropTypes 정의 추가
DesignCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,  // ID는 숫자형
        title: PropTypes.string,  // 제목은 문자열
        content: PropTypes.string,  // 내용은 문자열
        attachment: PropTypes.string,  // 이미지 URL은 문자열
    }).isRequired,  // post 객체는 필수
};

export default DesignCard;

