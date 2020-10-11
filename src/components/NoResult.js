import React from "react";
import styled from 'styled-components'
import Error from '../Assets/error.png'

const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 3.5em;
  color: ${(props) => props.theme.color.primary};
`;


export default function NoResult({query}) {
  return (
    <Wrapper>
      <Text>No Results</Text>
      <img src={Error} alt="error image" />
    </Wrapper>
  );
}
