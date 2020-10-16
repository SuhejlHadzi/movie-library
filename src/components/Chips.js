import React from 'react'
import styled from 'styled-components'

const Chip = styled.button`
&&{
    background: none;
border: 1px solid ${props => props.theme.color.primary};
border-radius: 50px; 
padding: 5px 15px; 
color: ${props => props.theme.color.primary};
margin: 0 5px;
&:hover {
    cursor: pointer; 
}
   @media (max-width: 768px) {
   padding: 5px 9px;
   margin: 0 2px;
  }
}
`

export default function Chips({name}){ 
    return (
       
            <Chip>{name}</Chip>
       
    )
}