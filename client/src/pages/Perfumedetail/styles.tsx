import styled from "styled-components";


export const Section = styled.section`
        width: 100%;
        height: 100vh;
        padding: 1rem;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
`;


export const ImgBorder = styled.div`
    width : 50rem;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box  = styled.div`
    width: 60%;
    height: 60%;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
