import * as React from 'react';
import styled from 'styled-components';
import Nav from '../component/Nav';



function Result () {

    const Wrap = styled.section`
        background-color: darkgoldenrod;
    `;
  
    return (
        <>
        <Nav></Nav>
        <Wrap>투표 결과 페이지 </Wrap>
        </>
    )
}

export default Result;