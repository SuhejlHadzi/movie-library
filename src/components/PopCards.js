import React from "react";
import styled from "styled-components";


const PopCard = styled.img`
  width: 280px;
  height: 390px;
  border-radius: 20px;
  margin: 10px;
  background: white;
  box-shadow: 0px 10px 20px -10px ${(props) => props.theme.color.shadow};
`;

const Title = styled.h4`
  color: ${(props) => props.theme.color.primary};
  margin: 10px 0 20px 0;
  text-align: center;
`;

export default function PopCards({item}) {
  return (
    <div>
      <PopCard
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
        alt={item.title + " poster"}
      />
      <Title className="card--title">{item.title}</Title>
    </div>
  );
}
