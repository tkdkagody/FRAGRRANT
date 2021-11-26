import styled from "styled-components";


export const Section = styled.section`
    width : 40rem;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box  = styled.ul`
    list-style: none;
    width: 80%;
    height: 80%;
    padding: 0.2rem ;
`;

export const Name = styled.li`
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #555353;
`;
export const Capacity = styled.li`
    height: 3rem;
    line-height: 3rem;
    font-size: 0.9rem;
    color: #555353;
`;

export const Month = styled.li`
    height: 11rem;
    display: flex;
    flex-direction: row;
`;
export const MonthBox = styled.div` 
    width: 50%;   
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
    
    & > img {
        width: 6rem;
        height: 6rem;
        object-fit: cover;
    }
    & > span {
        display: block;
        margin-left: 1rem;
        font-size: 0.9rem;
        color: #555353;
    }
`;

export const Mood = styled.li`
    height: 8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    & > span {
        display: block;
        width: 5.5rem;
        height: 1.8rem;
        line-height: 1.8rem;
        margin-right: 0.5rem;
        border: none;
        background-color: #ededf1;
        color: #555353;
        text-align: center;
        font-size: 0.8rem;
    } 
`;
export const Scent = styled.li` 
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > span {
        display: block;
        color: #555353;
        font-size: 0.8rem;
    }
`;
export const DescColumn = styled.li`
    height: 3rem;
    line-height: 3rem;
    color: #555353;
    font-size: 0.9rem;
`;

export const DescTxt = styled.li`
     color: #555353;
     font-size: 0.8rem;
`;