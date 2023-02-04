import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :root{
    --white: #FFFFFF;
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secundary:#EB5757;

    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20:#E0E0E0;
    --grey-0:#F5F5F5;

    --negative:#E60000;
    --warning:#FFCD07;
    --sucsses:#168821;
    --information:#155BCB;
 }
 
 button{
    cursor: pointer;
    border: 0;
    background: transparent;
 }

 ul, ol, li{
    list-style: none;
 }

 section, aside, div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    

 }

 body{
    background: var(--white)
 }
`
export const Container = styled.div`
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    align-items: center;
    @media (min-width: 768px){
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }


`