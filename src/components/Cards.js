import React from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa'

const Card = styled.div`
  width: 200px;
  height: 400px;
  margin: 15px 20px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
`;
const CardImage = styled.img`
  width: 180px;
  height: 280px;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px ${(props) => props.theme.color.shadow};
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Title = styled.h4`
  color: ${(props) => props.theme.color.primary};
  margin-top: 10px;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
`;

const Text = styled.p`
  color: ${(props) => props.theme.color.secondary};
`;


export default function Cards({ movie }) {
  return (
    <Card>
      <div className="poster">
        <CardImage
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
      </div>
      <div className="card--content">
        <Title className="card--title">{movie.title}</Title>
        <Text>
          <small>Relase date: {movie.release_date}</small>
        </Text>

        <Text>
          <small className="rating">Rating:  {movie.vote_average} <FaStar /> </small>
        </Text>
      </div>
    </Card>
  );
}
