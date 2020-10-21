import React, {useEffect, useState} from 'react'
import Cards from './Cards'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    @media (max-width: 768px) {
    padding-top: 280px;
  }
`;

export default function Playing({ setLoading }) {

  //Now Playing movies

     const [now, setNow] = useState([]);
     useEffect(() => {
       const fetchData = async () => {
         const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=87cea0f090383f2c0b68efa858648b0b&language=en-US&page=1";
         try {
           setLoading(true);
           const res = await fetch(url);
           const data = await res.json();
           setNow(data.results);
         } catch (err) {
           console.error(err);
         }
         setLoading(false);
       };
       fetchData();
     }, []);
    
    return(
          <Wrapper>
      {
        now
          .filter((movie) => movie.poster_path)
          .map((movie) => <Cards movie={movie} key={movie.id} />)
      }
    </Wrapper>
    )
}