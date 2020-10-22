import React from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa'

const PopCard = styled.img`
  width: 280px;
  height: 390px;
  border-radius: 20px;
  margin: 10px;
  background: white;
  box-shadow: 0px 10px 20px -10px ${(props) => props.theme.color.shadow};
    transition: transform 0.5s;
  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const Title = styled.h4`
  color: ${(props) => props.theme.color.primary};
  margin: 5px 0 5px 0;
  text-align: center;
`;

const RatingText = styled.p`
  color: ${(props) => props.theme.color.secondary};
  text-align: center;
   margin: 0px 0 20px 0;
`

export default function PopularCards({ item }) {
  return (
    <div>
      <PopCard
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
        alt={item.title + " poster"}
      />
      <Title className="card--title">{item.title}</Title>
      <RatingText>  {item.vote_average} <FaStar /> </RatingText>
    </div>
  );
}
