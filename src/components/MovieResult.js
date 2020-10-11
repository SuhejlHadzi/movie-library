import React from "react";
import Cards from "./Cards";
import styled from "styled-components";
import NoResult from "./NoResult";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.background};
`;

export default function MovieResult({ movies }) {
  return (
    <Wrapper>
      {movies.length === 0 ? (
        <NoResult />
      ) : (
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => <Cards movie={movie} key={movie.id} />)
      )}
    </Wrapper>
  );
}
