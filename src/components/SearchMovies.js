import React from "react";
import styled from "styled-components";
import { useHistory, NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import Chips from "./Chips";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 790px;
`;

const ChipsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 15px;
  @media (max-width: 768px) {
    flex-direction: row;
    padding: 0px;
  }
`;
const Form = styled.form`
  width: 100%;
  margin-top: 25px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  border-radius: 100px;
  box-shadow: 0px 5px 20px -10px ${(props) => props.theme.color.shadow};
  background:  ${(props) => props.theme.color.card};
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Input = styled.input`
  width: 94%;
  height: 40px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.color.primary};
  &::placeholder {
    color: ${(props) => props.theme.color.secondary};
  }
  &:focus::placeholder {
    color: transparent;
  }
  @media (max-width: 768px) {
    width: 87%;
  }
`;

const Button = styled.button`
  && {
    background: ${(props) => props.theme.color.primary};
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    font-size: 18px;
    height: 40px;
    padding-top: 3px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Link = styled(NavLink)`
&&{  
  background:  ${(props) => props.theme.color.card};
  border-radius: 100px;
  padding: 5px 15px;
  color: ${(props) => props.theme.color.secondary};
  margin: 0 5px;
  text-decoration: none;
  font-size: 14px;
  box-shadow: 0px 5px 15px -10px ${(props) => props.theme.color.shadow};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 5px 9px;
    margin: 0 2px;
  }
  &.active {
    background: ${(props) => props.theme.color.primary};
    color: #fff;
  }}
`;

export default function SearchMovies({ searchMovies, query, setQuery }) {
  const history = useHistory();
  return (
    <Wrapper>
      <ChipsWrapper>
        <Link to="/movie-library">
          <Chips name="Popular" />
        </Link>
        <Link to="/top-rated">
          <Chips name="Top Rated" />
        </Link>
        <Link to="/upcoming">
          <Chips name="Upcoming" />
        </Link>
        <Link to="/playing">
          <Chips name="Now Playing" />
        </Link>
      </ChipsWrapper>

      <Form onSubmit={searchMovies}>
        <Input
          className="input"
          type="text"
          name="query"
          placeholder="Search movies... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button
          type="submit"
          disabled={!query}
          onClick={() => history.push("/search")}
        >
          <FaSistrix />
        </Button>
      </Form>
    </Wrapper>
  );
}
