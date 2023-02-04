import styled, {css} from "styled-components";

export const ButtonGreenMedium = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    height: 40px;
    border-radius: 8px;
    background-color: var(--color-primary);
    color: var(--white);
    padding: 20px 20px;
    &:hover{
        background-color: var(--color-primary-50);
    }
`
export const ButtonGreyDefault = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    height: 60px;
    border-radius: 8px;
    background-color: var(--grey-20);
    color: var(--grey-50);
    width: 100%;
    &:hover{
        background-color: var(--grey-50);
        color: var(--grey-20);
    }
`