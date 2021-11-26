import styled from "styled-components";


export const Section = styled.section`
    width : 40rem;
    height: 50rem;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box  = styled.ul`
    list-style: none;
    width: 80%;
    height: 80%;
    border:1px solid black; 
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
        width: 7rem;
        height: 7rem;
        object-fit: cover;
    }
    & > span {
        display: block;
        margin-left: 1rem;
        color: #555353;
    }
`;

export const Mood = styled.li`

    & > span {
        border: 2px solid goldenrod;
    } 
`;
export const Scent = styled.li``;
export const DescColumn = styled.li``;
export const DescTxt = styled.li``;