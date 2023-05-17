import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body{
    background-color:#d5d4d4;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
}
a{
    text-decoration:none;
}
.app{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    padding: 20px 10px;
    margin: auto;
    border-radius: 4px;
    box-shadow: 0 3px 6px 0 #555;
    background: white;
    font-family: Montserrat;
}
`;
