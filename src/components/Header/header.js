import styled from "styled-components";


export const TagHeader = styled.header`
   background-color: var(--grey-0);
   width: 100%;
`
export const DivHeader = styled.div`
    align-items: center;
    width: 100%;
    gap: 13.9px;

    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`