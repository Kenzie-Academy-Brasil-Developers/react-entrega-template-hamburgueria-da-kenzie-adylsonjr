import styled from "styled-components";

export const DivApp = styled.div`
    width: 100%;
`
export const SectionProducts = styled.section`
    width: 100%;

    @media (min-width: 768px){
        width: unset;
    }
`
export const SectionCart = styled.section`
   
    background: var(--grey-0);
    border-radius: 5px;
    align-items: center;
    width: 100%;
    overflow: scroll;
    height: 275px;
    ::-webkit-scrollbar{
        width: 0px;
    }
     ::-webkit-scrollbar-thumb{
        width: 0px;
     }

    @media (min-width: 768px){
        width: unset;
        min-width: 300px;
        height: 320px;
    }
`