import * as React from 'react';
import styled from 'styled-components';
import LoginModal from '../component/LoginModal';
import Nav from '../component/Nav';


function Main() {

    const Wrap = styled.section`
        //background-color: #402F29;
        background-color: tan;
    `;
    return (
        <>
        
        <Nav></Nav>
        <Wrap>섹션1</Wrap>
        <LoginModal></LoginModal>
        </>
    )
}

export default Main;