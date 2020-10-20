import React from 'react'
import styled, {keyframes} from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999;
`;

const Outer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 4px;
  background-color: #fff;
`;

const Animation1 = keyframes`
  0% {
        left: -100%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
}
`;
const Animation2 = keyframes`
 0% {
        left: -150%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    background-color: ${(props) => props.theme.color.primary};
    animation: ${Animation1} 1.5s infinite ease-out;
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    background-color: ${(props) => props.theme.color.primary};
    animation: ${Animation2} 1.5s infinite ease-in;
  }
`;

export default function Loading() {
    return (
      <Wrapper>
        <Outer>
          <Inner>LOADING</Inner>
        </Outer>
      </Wrapper>
    );
}