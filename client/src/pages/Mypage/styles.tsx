import styled from 'styled-components';

export const Section = styled.section`
    height: 54rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
`;

export const ContentWrap = styled.div`
    width: 70%;
    height: 30rem;
    border: 1px solid gainsboro;
`;

export const Selection = styled.div`
    width: 70%;
    height: 17rem;
    display: flex;
    justify-content: space-around;
    padding: 0.2rem;
`;

export const Category = styled.div`
    width: 20rem;
    height: 17rem;
    border: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    cursor: pointer;
    & > img {
        width: 2.5rem;
        height: 2.2rem;
        margin-bottom: 1rem;
    }
    & > span {
        display: block;
        width: 100%;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        font-size: 1rem;
        font-weight: bold;
        color: rgb(90,90,90);
        margin-bottom: 1rem;
    }
    & > label {
        display: block;
        width: 80%;
        height: 4rem;
        text-align: center;
        line-height: 2;
        color: rgb(90,90,90);
        font-size: 0.8rem;
    }
    &:hover {
        border: 1px solid black;
        background-color: #dfdede33;
    }
`;