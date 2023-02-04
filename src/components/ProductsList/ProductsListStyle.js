import styled from "styled-components";

export const UlProducts = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    overflow: scroll;
    width: 100%;
    padding: 1rem;

    @media (min-width: 768px){
        flex-wrap: wrap;
        overflow: unset;
        justify-content: center;
    }

`