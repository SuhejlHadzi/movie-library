import React from "react";
import styled from 'styled-components'
import Play from '../Assets/play.svg'
import Moon from "../Assets/moon.svg";
import SearchMovies from './SearchMovies'


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

export default function Header({ searchMovies, query, setQuery, movies, setMovies, isDarkMode, setIsDarkMode }) {
  return (
    <HeaderWrapper>
      <Logo>
        <img src={Play} alt="" /> <LogoText>MOVIE LIBRARY</LogoText>
      </Logo>
      <SearchMovies
        searchMovies={searchMovies}
        query={query}
        setQuery={setQuery}
        movies={movies}
        setMovies={setMovies}
      />
      <img
        src={Moon}
        alt="mode switch"
        onClick={() => setIsDarkMode(!isDarkMode)}
      />
    </HeaderWrapper>
  );
}
