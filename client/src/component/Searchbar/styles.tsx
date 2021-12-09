import styled from 'styled-components';


export const Section = styled.section`
    width: 100%;
    height: 8rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Border = styled.div`
    width: 40rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Search = styled.div`
    width: 30rem; 
    height: 4rem; 
    border-bottom: 1px solid #979595;
    display: flex;
    & > input {
        border: none;
        font-size: 1rem;
        width: 90%;
        height: 100%; 
        text-indent: 0.5rem;
        color : #555353;
    }
    & > div {
        width: 10%; 
        height: 100%;
        & > img {
            width: 2.3rem;
            margin-top: 0.7rem;
            cursor: pointer;
        }
    }
`;

