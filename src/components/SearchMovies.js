import React from "react";
import SearchIcon from '../Assets/search.svg'
import styled from 'styled-components'
import{useHistory} from 'react-router-dom'

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  border-radius: 100px;
  border: 2px solid ${(props) => props.theme.color.primary};
   @media (max-width: 768px) {
   margin-top:10px;
   width: 105%;
  }
`;

const Input = styled.input`
  width: 501px;
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
     @media (max-width: 768px) {
   width: 81%;
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
 const history = useHistory();
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
        
          <Button type="submit" disabled={!query} onClick={() => history.push('/search')}>
            <img src={SearchIcon} alt="seach icon" />
          </Button>
      
      </Form>
    </div>
  );
}
