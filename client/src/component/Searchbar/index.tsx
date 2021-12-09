import { Section,Border, Search} from './styles'


function SearchBar () {
    return (
        <Section>
            <Border>
                <Search>
                    <input placeholder="검색어를 입력하세요."></input>
                    <div>
                        <img src={'../../../icons/search.svg'}></img>
                    </div>
                </Search>
            </Border>
        </Section>
    );
}

export default SearchBar;