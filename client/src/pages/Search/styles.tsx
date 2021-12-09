import styled from "styled-components";


export const Section = styled.section`
    width: 100%;
    height: 100vh;
    margin: 0 auto; 
    padding: 5rem 0.2rem;
`;

export const SearchBar = styled.div`
    width: 45rem; 
    height: 4rem;
    margin: 0 auto;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

    & > input {
        width: 45rem;
        height: 3rem;
        text-indent: 0.5rem;
        border: none;
        font-size: 1rem;
    }
    & > img {
        width: 2.5rem;
        cursor: pointer;
    }
`;