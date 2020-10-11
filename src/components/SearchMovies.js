import React from "react";
import SearchIcon from '../Assets/search.svg'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.color.background};
  padding: 0 0 0 20px;
  border-radius: 100px;
  border: 2px solid ${(props) => props.theme.color.primary};
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.color.primary};
  &::placeholder {
    color: ${(props) => props.theme.color.primary};
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const Button = styled.button`
background: #efefef;
border: none;
border-radius: 50% ;
width: 42px;
height: 42px;
padding-top:3px;
&:hover {
  cursor: pointer;
}
`


export default function SearchMovies({searchMovies , query, setQuery}) {

  return (
    <div>
      <Form onSubmit={searchMovies}>
        <Input
          className="input"
          type="text"
          name="query"
          placeholder="Search movies... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
          <Button type="submit" disabled={!query}>
            <img src={SearchIcon} alt="seach icon" />
          </Button>
      
      </Form>
    </div>
  );
}
