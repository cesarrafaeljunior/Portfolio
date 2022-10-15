import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    background-color: #262626;
}



button{
    border: none;
    cursor: pointer;
}

a{
    cursor: pointer;
    text-decoration: none;
    color: #262626;
}

input{
    border: none;
}

input:hover{
    outline: none;
}

`;
