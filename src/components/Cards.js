import React from "react";
import styled from "styled-components"

const Card = styled.div`
width: 200px;
height: 450px;
margin: 20px;
&:hover {
  cursor: pointer;
}
`
const CardImage = styled.img`
  width: 180px;
  height: 280px;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px ${props => props.theme.color.shadow};
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Title = styled.h4`
  color: ${props => props.theme.color.primary};
  margin-top: 10px;
`;

const Text = styled.p`
  color: ${(props) => props.theme.color.primary};
`;

export default function Cards({ movie }) {
  return (
    
    <Card>
      <div className="poster">
        <CardImage
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
      </div>
      <div className="card--content">
        <Title className="card--title">{movie.title}</Title>
        <Text>
          <small>RELEASE DATE: {movie.release_date}</small>
        </Text>

        <Text>
          <small className="rating">RATING: {movie.vote_average}</small>
        </Text>
      </div>
    </Card>
  );
}
