import styled from 'styled-components';

export const Section = styled.section`
    padding: 0.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

`;

export const Month = styled.div`
    width: 8rem; 
`;

export const Circle = styled.div`
    width: 6rem; 
    height: 6rem;
    border-radius: 50%;
    background-color: tan;
    cursor: pointer;
    margin:0 auto; 
    & > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
    }
`;

export const Title = styled.div`
    height: 2rem; 
    text-align: center;
    line-height: 2rem;
    font-size: 0.8rem;
    color: #555353;
    cursor: pointer;
`;