import React, { useState } from 'react'
import { ButtonGreenMedium } from '../../../Styles/buttons'
import { Form, Input } from './searchFormStyle'


export const SearchForm = ({setSearch }) => {
    const [searchValue, setSearchValue] = useState("")
    
    const submit = (event)=>{
        event.preventDefault();
        setSearch(searchValue)
        setSearchValue("")
      }

      

  return (
    <>
        <Form onSubmit={submit}>
            <Input type="text" onChange={(event)=> setSearchValue(event.target.value)} placeholder="Digite sua pesquisa"/>
            <ButtonGreenMedium type='submit'>Pesquisa</ButtonGreenMedium>
        </Form>
        
    </>

  )
}
