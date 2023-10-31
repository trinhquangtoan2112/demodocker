import styled from "styled-components";


export const H1 = styled.h1`
   background-color: ${props => props.theme.bgColor};
   color: ${props => props.theme.color};
   font-size:25px;
   font-weight:bold;
   
   padding : 10px 0 10px 20px;

`

export const P = styled.p
    `
    margin-top: 10px;
      margin-bottom: 10px;
       margin-left:10px;
       color:${props => props.theme.color1};
       font-size:15px;

`;

export const H3 = styled.h3`
   background-color: ${props => props.theme.bgColor};
   color: ${props => props.theme.color};
   font-size:15px;
   font-weight:bold;
   margin-top: 10px;
   padding : 10px 0 10px 20px;

`