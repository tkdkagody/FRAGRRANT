import * as React from 'react';
import { Section, SearchBar } from './styles'




function Search() {


  
    return (
        <>
        <Section>
            <SearchBar>
                <input type="text" placeholder="키워드를 입력하세요."></input>
                <img src={"../../../icons/search.svg"}></img>
            </SearchBar>
        </Section>

        </>
    )
}

export default Search;