import * as React from 'react';
import styled from 'styled-components';
import Nav from '../../component/Nav';




function Search() {

    const Wrap = styled.section`
        background-color: darkgoldenrod;
    `;
  
    return (
        <>
{/*         
        <Nav></Nav> */}
        <Wrap>검색페이지</Wrap>
        </>
    )
}

export default Search;