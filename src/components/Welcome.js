import React from "react";
import styled from 'styled-components'
import Movie from '../Assets/movie.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.background};
`;
const ImageWrapper = styled.img`
  width: 130px;
  margin-top: 30px;

  &::after {
    content: " ";
    width: 100px;
    height: 100px;
    background: red;
    margin-top: 200px;
  }
`;

const Text  = styled.h1`
font-size: 3.5em;
color: ${props => props.theme.color.primary};
`

export default function Welcome() {
  return (
    <Wrapper>
      <Text>Find your favourite movies.</Text>
      <ImageWrapper src={Movie} alt="" />
    </Wrapper>
  );
}
