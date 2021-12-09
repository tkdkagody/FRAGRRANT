import styled from "styled-components";


export const Section = styled.section`
    width: 100%;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonBox = styled.div`
    width: 70%;
    height: 7rem;
    padding: 0.5rem 0.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > span {
        display: block;
        width: 3rem; 
        height: 2.5rem;
        cursor: pointer;
        background-color: none;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border:1px solid black;
        }
        & > img {
            width: 60%;
            height: 60%;
        }
    }
    & > button {
        width: 12rem;
        height: 3rem;
        border: 1px solid gainsboro;
        background-color: white;
        cursor: pointer;
        color: #413e3e;

        &:hover {
            border:1px solid black;
        }
            
    }
`;
export const MoodResult = styled.div`
    width: 70%;
    height: 55rem;
    padding: 0.2rem;
`;

export const Mood = styled.ul`
border:1px solid gainsboro;
    list-style: none;
    height: 40rem;
    position: relative;
    margin-bottom: 3rem;
    & >li {
        position: absolute;
        border: none;
        background-color: #f1f0e0;
        border-radius: 50%;
        text-align: center;
        color:   #302e2e;
        font-size: 1rem;
        font-weight: bold;
    }
    & > li:nth-child(1) {
        top: 28%;
        left: 22%;
        width: 8rem;
        height: 8rem;
        line-height: 8rem;
        
    }
    & > li:nth-child(2) {
        top: 11%;
        left: 30%;
        width: 10rem;
        height: 10rem;
        line-height: 10rem;
    }
    & > li:nth-child(3) {
        top: 16%;
        left: 42%;
        width: 15rem;
        height: 15rem;
        line-height: 15rem;
        background-color: #fbeffb;
    }
    & > li:nth-child(4) {
        top: 27%;
        left:61%;
        width: 8rem;
        height: 8rem;
        line-height: 8rem;
    }
    & > li:nth-child(5) {
        top: 41%;
        left:27%;
        width: 15rem;
        height: 15rem;
        line-height: 15rem;
        background-color: #faeed8;
        
    }
    & > li:nth-child(6) {
        top: 59%;
        left:44.5%;
        width: 12rem;
        height: 12rem;
        line-height: 12rem;
        
    }
    & > li:nth-child(7) {
        top: 47%;
        left:57%;
        width: 9rem;
        height: 9rem;
        line-height: 9rem;
        
    }
    & > li:nth-child(8) {
        top: 63%;
        left:64%;
        width: 12rem;
        height: 12rem;
        line-height: 12rem;
        background-color: #e4ffe0;
        
        
        
    }
`;

export const MonthSeason = styled.div`
    border: 1px solid gainsboro;
    height: 9rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & > span {
        display: block;
        width: 7rem; 
        height: 7rem;
        border: 1px solid gainsboro;
        text-align: center;
        line-height: 7rem;
    } 
`;


export const List = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

