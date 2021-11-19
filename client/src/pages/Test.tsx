import * as React from 'react';
import styled from 'styled-components';
import Nav from '../component/Nav';


function Test () {

    const Wrap = styled.section`
        background-color: blue;
    `;
    return (
        <>
        {/* <Nav></Nav> */}
        <Wrap>섹션2테스트보기</Wrap>
        </>
    )
}

export default Test;