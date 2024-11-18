import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import * as S from './SearchBar.style';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {
    if (!searchKeyword) return;
  }

    return (
      <S.SearchBarContainer>
        <S.SearchInput
          type="text" 
          value={searchKeyword} 
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
      </S.SearchBarContainer>
    );
  };
  
  
export default SearchBar;

