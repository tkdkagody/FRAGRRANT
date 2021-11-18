import * as React from 'react';
import styled from 'styled-components';
import Footer from '../../component/Footer';
import Login from '../../component/Login';
import Nav from '../../component/Nav';
import Signup from '../../component/Signup';
import { MainSection, TestTxt, InfoTxt } from './styles'


function Main() {

    return (
        <>
            <Nav></Nav>
            <MainSection>
                <TestTxt>
                    <div>FIND</div>
                    <div>YOUR</div>
                    <div>FRAGRANT</div>
                    <span>테스트하러가기</span>
                </TestTxt>
                <InfoTxt>
                    <div>SEARCH</div>
                    <div>SOME</div>
                    <div>FRAGRANT</div>
                    <span>향수보러가기</span>
                </InfoTxt>
            </MainSection>
            <Footer></Footer>
        </>
    )
}

export default Main;