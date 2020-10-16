import React from "react";
import styled from 'styled-components'
import{useHistory} from 'react-router-dom'
import {FaSistrix} from 'react-icons/fa'
import Chips from './Chips'

const Wrapper = styled.div`
display: flex; 
flex-direction: column;
justify-content: center; 
align-items: center; 
width: 700px;
`

const ChipsWrapper = styled.div`
display: flex; 
flex-direction: row; 
padding: 5px 15px;
   @media (max-width: 768px) {
   flex-direction: row;
   padding: 0px;

  }
`

const Form = styled.form`
width: 100%;
margin-top: 30px;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  border-radius: 100px;
  border: none;
  box-shadow: 0px 5px 18px -10px ${(props) => props.theme.color.shadow};
   @media (max-width: 768px) {
   width: 90%;
  }
`;

const Input = styled.input`
  width: 95%;
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
   width: 90%;
  }
`;

const Button = styled.button`&&{
background: ${props => props.theme.color.primary};
color: white;
border: none;
border-radius: 50% ;
width: 40px;
font-size: 18px;
height: 40px;
padding-top:3px;
&:hover {
  cursor: pointer;}
}
`

export default function SearchMovies({searchMovies , query, setQuery}) {
 const history = useHistory();
  return (
    <Wrapper>
       <ChipsWrapper>
      <Chips name="Latest" />
<Chips name="Top Rated" />
<Chips name="Upcomming" />
<Chips name="Popular" />
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
        
          <Button type="submit" disabled={!query} onClick={() => history.push('/search')}>
            <FaSistrix />
          </Button>
      
      </Form>
    </Wrapper>
  );
}
