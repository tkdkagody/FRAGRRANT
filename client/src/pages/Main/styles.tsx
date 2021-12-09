import styled from 'styled-components';

export const MainSection = styled.section`
  position: relative;
    width: 100%;
    height: 92vh;
    background-image: url('../../images/main.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TestTxt = styled.div`
    width: 25rem; 
    height: 30rem;
    margin-left: 10rem;
    margin-top: -5rem;
    padding: 0.2rem;
    & > div {
        font-size: 2rem;
        font-weight: bold;
        color : rgb(255, 255, 255);
        height: 20%;
    }
    & > div:nth-child(1), div:nth-child(2) {        
        letter-spacing: 6.2rem;
        text-indent: 0.5rem;
        line-height: 3;
    }

    & > div:nth-child(2) {
        text-indent: 0.3rem;
    }

    & > div:nth-child(3) {
        letter-spacing: 2rem;
        text-indent: 0.1rem;
        height: 20%;
        line-height: 3;
    }

    & > span {
        display: block;
        width: 70%; 
        height: 15%;
        border: 2px solid white;
        font-size: 1.8rem;
        line-height: 2.7;
        text-align: center;
        font-weight: bold;
        color : rgb(255, 255, 255);
        cursor: pointer; 
        margin-left: 3.5rem;
        margin-top: 3rem;
        &:hover {
            background-color:  black;
            border: none;
            font-weight: none;
        }
    }
`;

export const InfoTxt = styled(TestTxt)`
    margin-left: 45rem;
    & > div:nth-child(1) {
        text-indent: 0.3rem;
        letter-spacing: 3.3rem;
    }
`;


export const Box = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 15rem; 
    height: 15rem; 
    background-image: url('../../images/main2.jpg');
    background-repeat: no-repeat;
    background-size: 15rem 15rem;
    opacity: 0.5;
    border-radius : 50%;
`;