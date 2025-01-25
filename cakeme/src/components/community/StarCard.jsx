import { useState } from 'react';
import * as S from './StarCard.style';
import StarCardProfile from './StarCardProfile'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

const StarCard = () => {
    const [stars, setStars] = useState([false, false, false, false, false]);
    const cardTitle = '100일 레터링 케이크크크크크';
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate("/community/detail");
    };
    
    const toggleStar = (index) => {
        setStars((prevStars) => 
            prevStars.map((star, i) => (i === index ? !star : star))
        );
    };

    return(
        <S.StarContainer onClick={handleDetail}>
            <S.StarSection>
                {stars.map((filled, index) => (
                    filled ? (
                        <FaStar 
                            key={index} 
                            className="f_star" 
                            onClick={() => toggleStar(index)} 
                        />
                    ) : (
                        <FaRegStar 
                            key={index} 
                            className="n_star" 
                            onClick={() => toggleStar(index)} 
                        />
                    )
                ))}
            </S.StarSection>
            <S.StarCardTitle>{truncateText(cardTitle, 11)}</S.StarCardTitle>
            <S.StarCardCategory>커플</S.StarCardCategory>
            <StarCardProfile></StarCardProfile>
        </S.StarContainer>
    );
}

export default StarCard;