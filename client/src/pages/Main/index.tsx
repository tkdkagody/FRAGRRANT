import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Footer from '../../component/Footer';
import Login from '../../component/Login';
import Nav from '../../component/Nav';
import Signup from '../../component/Signup';
import { MainSection, Box, TestTxt, InfoTxt } from './styles'
import { gsap } from "gsap";
import { useHistory } from 'react-router-dom';



function Main() {
    const history = useHistory();


    const imgRef = useRef<HTMLImageElement>(null);
    const tl = gsap.timeline({ defaults: { ease: 'Power2.easeInOut' } });

    useEffect(()=> {
        tl.to(imgRef.current, {
            duration: 15, 
            rotation:300,
            transformOrigin:"50% 90%",
            x: 1550,
            y: 500, 
            ease: "none", 
            delay: 0.2,
        });
        tl.to(imgRef.current, {
            duration: 15, 
            rotation: -360,
            x: 20,
            y: 200, 
            opacity: 0.5, 
        });

        tl.to(imgRef.current, {
            duration: 15, 
            rotation: 300,
            transformOrigin:"50% 90%",
            x: 1550,
            y: 20, 
            opacity: 0.2, 
        });
        tl.to(imgRef.current, {
            duration: 17, 
            rotation: -300,
            transformOrigin:"50% 90%",
            x: 500,
            y: 200, 
            opacity: 0.2, 
        });
        tl.to(imgRef.current, {
            duration: 12, 
            rotation: 300,
            transformOrigin:"50% 90%",
            x: 1500,
            y: 200, 
            opacity: 0.3, 
        });
        tl.to(imgRef.current, {
            duration: 19, 
            rotation: -300,
            transformOrigin:"50% 90%",
            x: 10,
            y: 10, 
            opacity: 0.3, 
        });

    },[]);

    const handleClickTest = () => {
        history.push('/test')
    }
   
    const handleClickPerfume = () => {
        history.push('/perfume')
    }

    return (
        <>
            {/* <Nav></Nav> */}
            <MainSection>
                <Box ref={imgRef}></Box>
                <TestTxt>
                    <div>FIND</div>
                    <div>YOUR</div>
                    <div>FRAGRANT</div>
                    <span onClick={handleClickTest}>테스트하러가기</span>
                </TestTxt>
                <InfoTxt>
                    <div>SEARCH</div>
                    <div>SOME</div>
                    <div>FRAGRANT</div>
                    <span onClick={handleClickPerfume}>향수보러가기</span>
                </InfoTxt>
            </MainSection>
            <Footer></Footer>
        </>
    )
}

export default Main;