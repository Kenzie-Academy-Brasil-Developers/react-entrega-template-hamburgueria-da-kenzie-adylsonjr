import styled from "styled-components";

export const DivTitleCart = styled.div`
    width: 100%;
    background: var(--color-primary);
    text-align: start;
    padding: 1rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`
export const UlCartList = styled.ul`
    width: 100%;
    max-height: 500px;
    min-height: 65px;
    overflow: scroll;
     ::-webkit-scrollbar{
        width: 0px;
    }
     ::-webkit-scrollbar-thumb{
        width: 0px;
       
     }
`
export const DivContainerCartEmpty = styled.div`
    justify-content: space-around;
    height: 56%;
    align-items: center;
    padding: 0.5rem;
`