import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const HeaderContainer = styled.div`
  background-color: #F7F2EB;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
`;

export const TitleContainer = styled.div`
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: #6f4e37;
  margin: 5px 0;
`;

export const Button = styled(Link)`
  display: flex; 
  align-items: center; 
  justify-content: center;
  padding: 12px 25px;
  width: 45%;
  background-color: #FFFCF7;
  color: #783C03;
  border-radius: 15px;
  border-color: #783C03;
  cursor: pointer;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  margin-top: 5%;
  text-align: center;

  &:hover {
    background-color: #f7f0e3;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
`;


export const Item = styled.div`
  flex: 0 0 auto;
  width: 320px;
  height: 261px;
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
`;

export const CategotyImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const Text = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const List = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: nowrap;
  position: relative;
  animation: ${scrollAnimation} 60s linear infinite;
  width: 200%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 200%;
  margin-bottom: 4%;
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  overflow-x: hidden;
`;

export const CategorySection = styled.div`
  margin-top: 20px;
`;