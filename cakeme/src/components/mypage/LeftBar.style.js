import styled from 'styled-components';

export const LeftBarContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  width: 217px;
  height: auto;
  border-radius: 8px;
  border: 1px solid #CFB7A0;
`;

export const Section = styled.div`
  width: 100%;
`;

export const Header = styled.h2`
  color: #593E17;
  font-weight: 600;
  font-size: 18px;
  margin-yop : 15px;
  margin-bottom : 15px;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(120, 60, 3, 0.6);
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  color: rgba(120, 60, 3, 0.6);
  font-size: 16px;
  font-weight: 400;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
