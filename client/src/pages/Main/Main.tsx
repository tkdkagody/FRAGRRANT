import * as React from 'react';
import styled from 'styled-components';
import Footer from '../../component/Footer';
import Login from '../../component/Login';
import Nav from '../../component/Nav';
import Signup from '../../component/Signup';
import { MainSection } from './styles'


function Main() {

    return (
        <>
            <Nav></Nav>
            <MainSection></MainSection>
            <Footer></Footer>
        </>
    )
}

export default Main;