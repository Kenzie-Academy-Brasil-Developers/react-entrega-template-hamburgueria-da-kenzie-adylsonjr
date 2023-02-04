import React from 'react'
import { Container } from '../../Styles/global'
import { SearchForm } from './SearchForm'
import { DivHeader, TagHeader } from './header'
import logo from "../../assets/logo.svg"

export const Header = ({ setSearch }) => {
    return (
        <TagHeader>
            <Container>
                <DivHeader className='divHeader'>
                    <img src={logo} alt="" />
                    <SearchForm setSearch={setSearch} />
                </DivHeader>
            </Container>
        </TagHeader>
    )
}
