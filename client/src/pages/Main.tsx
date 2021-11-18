import * as React from 'react';
import styled from 'styled-components';
import Login from '../component/Login';
import Nav from '../component/Nav';
import Signup from '../component/Signup';





function Main() {

    const Wrap = styled.section`
        //background-color: #402F29;
        background-color: tan;
    `;
    return (
        <>
        
        <Nav></Nav>
        <Wrap>섹션1</Wrap>
        </>
    )
}

export default Main;