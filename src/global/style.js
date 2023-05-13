import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);
* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
}
body{
    font-family:Robot,arial;
    background-color:#d5d4d4;
}
a{
    text-decoration:none;
}
.app{
    max-width:1080px;
    margin:20px auto;
}
`;
