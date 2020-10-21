import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import PopCards from "./PopCards";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 210px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 250px;
  }
`;
const ImageWrapper = styled.img`
  width: 130px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 3.5em;
  color: ${(props) => props.theme.color.primary};
  @media (max-width: 768px) {
    align-self: start;
    padding-left: 30px;
    line-height: 1.2em;
  }
`;

const H2 = styled.h2`
  margin: 5px 0 10px 0;
  color: ${(props) => props.theme.color.secondary};
  @media (max-width: 768px) {
    align-self: start;
    padding-left: 30px;
  }
`;

const PopularWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 30px;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const IconStyle = styled.i`
  color: ${(props) => props.theme.color.secondary};
  @media (max-width: 768px) {
    align-self: start;
    padding-left: 30px;
    margin-top: 10px;
  }
`;

export default function Welcome({ setLoading }) {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular/?api_key=87cea0f090383f2c0b68efa858648b0b&language=en-US&page=1/";
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setPopular(data.results);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Title>Find your favourite movies.</Title>
      <H2>Popular Movies</H2>
      <IconStyle>
        <FaArrowDown />
      </IconStyle>
      <PopularWrapper>
        <CardWrapper>
          {popular.map((item) => (
            <PopCards item={item} key={item.id} />
          ))}
        </CardWrapper>
      </PopularWrapper>
    </Wrapper>
  );
}
