import React from "react";
import styled from 'styled-components'
import Play from '../Assets/play.svg'
import Moon from "../Assets/moon.svg";
import SearchMovies from './SearchMovies'
import { FaPlay, FaMoon, FaRegMoon } from "react-icons/fa";


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
`;

export default function Header({ searchMovies, query, setQuery, movies, setMovies, isDarkMode, setIsDarkMode }) {
  return (
    <HeaderWrapper>
      <Logo>
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
