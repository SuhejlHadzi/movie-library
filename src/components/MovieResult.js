import React from "react";
import Cards from "./Cards";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    @media (max-width: 768px) {
    padding-top: 280px;
  }
`;

export default function MovieResult({ movies }) {
  return (
    <Wrapper>
      {
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => <Cards movie={movie} key={movie.id} />)
      }
     
    </Wrapper>
  );
}
