import React from 'react';
import * as S from './DesignCard.style';
import cake from '../../assets/community/cake.jpeg';

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const DesignCard = () => {
    const cardText =
        '제 친구 채은이의 생일을 맞아 케이크를 준비했습니다. 채은이가 좋아해줬으면 좋겠네요. CakeMe의 디자인 서비스 정말 편하고 좋아요! CakeMe의 디자인 서비스 정말 편하고 좋아요! CakeMe의 디자인 서비스 정말 편하고 좋아요!';

    const cardTitle = '채은이 생일 케이크크크크크';

    return (
        <S.DesignCardContainer>
            <S.DesignCardImg src={cake} />
            <S.DesignCardTitle>{truncateText(cardTitle, 9)}</S.DesignCardTitle>
            <S.DesignCardText>{truncateText(cardText, 72)}</S.DesignCardText>
        </S.DesignCardContainer>
    );
};

export default DesignCard;
