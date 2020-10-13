import React from "react";
import styled from 'styled-components'
import SearchMovies from './SearchMovies'
import { FaPlay, FaMoon, FaRegMoon } from "react-icons/fa";
import {Link, useHistory} from 'react-router-dom'



const HeaderWrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: ${(props) => props.theme.color.primary};

`;
const Logo = styled.div`
display: flex; 
align-items: center;
&:hover{ 
  cursor: pointer;
}
 @media (max-width: 768px) {
    padding-top: 20px;
    margin-bottom: 20px;
  }
`

const LogoText = styled.h2`
margin-left: 20px;
`
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  box-shadow: 0px 10px 20px -10px ${(props) => props.theme.color.shadow};
  border-radius: 50%;
  display:flex;
  align-items:center;
  justify-content:center;
    &:hover{ 
    cursor: pointer;  
  }
   @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

export default function Header({ searchMovies, query, setQuery, movies, setMovies, isDarkMode, setIsDarkMode }) {
   const history = useHistory();
  return (
    <HeaderWrapper>
      <Logo onClick={() => history.push('/')}>
        <FaPlay /> <LogoText>MOVIE LIBRARY</LogoText>
      </Logo>
      <SearchMovies
        searchMovies={searchMovies}
        query={query}
        setQuery={setQuery}
        movies={movies}
        setMovies={setMovies}
      />
      <IconWrapper onClick={() => setIsDarkMode(!isDarkMode)}>
        <FaMoon />
      </IconWrapper>
    </HeaderWrapper>
  );
}
