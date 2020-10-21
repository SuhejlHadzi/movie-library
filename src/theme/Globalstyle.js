import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  body {
  background: ${(props) => props.theme.color.background};
  transition: background 0.5s;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    &:focus {
    border: none;
    outline: none;
    background: none;
}
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
   -webkit-text-fill-color:#ccc ;
}

::selection { 
    background:  ${(props) => props.theme.color.primary};
    color: #fff;
    }

::-webkit-scrollbar {
    background: ${(props) => props.theme.color.background};
    width: 10px;
} 
::-webkit-scrollbar-button {
    background: ${(props) => props.theme.color.secondary};
}
::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.secondary};
  
}
`;

export default Globalstyle;
