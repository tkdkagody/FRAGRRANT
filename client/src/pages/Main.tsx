import * as React from 'react';
import styled from 'styled-components';
import Nav from '../component/Nav';


function Main() {

    const Wrap = styled.section`
        background-color: #402F29;
    `;
    return (
        <>
        <Nav></Nav>
        <Wrap>섹션1</Wrap>
        </>
    )
}

export default Main;