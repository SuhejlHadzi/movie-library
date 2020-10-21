import React from "react";
import styled from "styled-components";
import SearchMovies from "./SearchMovies";
import { FaPlay, FaMoon, FaRegMoon } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const HeaderWrapper = styled.div`
  height: 170px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  width: 100%;
  margin-bottom: 20px;
  flex-wrap: wrap;
  background: ${(props) => props.theme.color.primary};
  color: #fff;
  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;
const LowerWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 120px;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding-top: 20px;
    margin-bottom: 20px;
  }
`;
const LogoText = styled.h2`
  margin-left: 20px;
`;

const IconWrapper = styled.span`
  border: 2px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export default function Header({
  searchMovies,
  query,
  setQuery,
  movies,
  setMovies,
  isDarkMode,
  setIsDarkMode,
}) {
  const history = useHistory();
  return (
    <HeaderWrapper>
      <UpperWrapper>
        <Logo onClick={() => history.push("/")}>
          <FaPlay /> <LogoText>MOVIE LIBRARY</LogoText>
        </Logo>
        <IconWrapper
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            localStorage.setItem("isDarkMode", !isDarkMode);
          }}
        >
          <FaMoon />
        </IconWrapper>
      </UpperWrapper>
      <LowerWrapper>
        <SearchMovies
          searchMovies={searchMovies}
          query={query}
          setQuery={setQuery}
          movies={movies}
          setMovies={setMovies}
        />
      </LowerWrapper>
    </HeaderWrapper>
  );
}
