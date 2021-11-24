import styled from 'styled-components';



export const Box = styled.div`
    width: 22%; 
    height: 30rem;
    margin: 1.5rem;
    padding:0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > img {
        width: 90%;
        height: 28rem;
        overflow: hidden;

       
    }
    & > div {
        width: 90%;
        height: 4.5rem;
        text-align: center;
        line-height: 4.5rem;
    }
`;