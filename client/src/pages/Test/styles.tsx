import styled from 'styled-components';

export const Section1 = styled.section`
    width: 100%;
    height: 54.2rem;
    margin: 0 auto; 
    padding: 0.2rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( rgba(245, 235, 235, 0.657), rgba(216, 213, 213, 0.534) ), url('../../../images/perfume.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 100% 120%;
    background-position-y: -8rem;

`;

export const Text = styled.div`
    width: 50rem; 
    height: 10rem;
    margin-bottom: 2rem;
    font-size: 1.7rem;
    text-align: center;
    line-height: 4rem;
    color: #413e3e;
`;

export const Button = styled.button`
    width: 20rem;
    height: 3.5rem;
    background-color:transparent;
    border: 2px solid #413e3e;
    font-size: 1.5rem;
    cursor: pointer;
    color: #413e3e;
    &:hover {
    background-color: white;
    color: #413e3e;

  }
`;

export const Section2 = styled.section`
    width: 100%;
    height: 54.2rem;
    padding: 6rem 0.2rem;
    /* display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */


`;

export const Progress = styled.div`
    margin: 0 auto; 
    background-color: rgb(209, 210, 212);
    width: 30rem;
    height: 2rem;
    border-radius: 0.5rem;
    margin-bottom: 3rem;

  & > div {
    background-color: rgb(179, 184, 159);
    width: 10rem;
    height: 2rem;
    border-radius: 0.5rem;
    transition: 1s ease;
    transition-delay: 0.5s;
    text-align: end;
    line-height: 2rem;
    padding: 0 0.3rem;
    font-size: 0.9rem;
    color:white;
    font-weight: bold;
  }
`;

export const TestWrap = styled.div`
    width: 1024px; 
    margin: 0 auto;
`;