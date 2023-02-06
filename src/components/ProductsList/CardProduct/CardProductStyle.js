import styled from "styled-components";

export const LiProducts = styled.li`
    border: 2px solid var(--grey-0);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    min-width: 300px;
`
export const DivImgProduct = styled.div`
width: 100%;
`

export const ImgProduct = styled.img`
    background: var(--grey-0);
    object-fit: scale-down;
    width: 100%;
   `
export const DivCardProduct = styled.div`
    padding: 15px;
    gap: 15px;
`