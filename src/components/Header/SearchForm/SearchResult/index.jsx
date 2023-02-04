import React from 'react'
import { ButtonGreenMedium } from '../../../../Styles/buttons'
import { SpanTitleSearch, TitleSearch } from '../../../../Styles/typography'
import { DivSearchResult } from './searchResultStyle'


export const SearchResult = ({setSearch, search}) => {
    if(search){
        return (
           <DivSearchResult>
              <TitleSearch>Resultados para: <SpanTitleSearch>{search}</SpanTitleSearch></TitleSearch>
              <ButtonGreenMedium onClick={() => setSearch("")}>Limpar Busca</ButtonGreenMedium>
            </DivSearchResult>
        )

    }
}



