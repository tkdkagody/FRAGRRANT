import * as React from 'react';
import styled from 'styled-components';
import Nav from '../component/Nav';


function Perfume() {

    const Wrap = styled.section`
        background-color: yellow;
    `;
    return (
        <>
        <Nav></Nav>
        <Wrap>섹션2퍼퓸보기</Wrap>
        </>
    )
}

export default Perfume;