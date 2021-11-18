import styled from 'styled-components';

export const Wrap = styled.section`
    background-color: none;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: row;
`;

export const Section = styled.div`
    margin: 0 auto; 
    width: 1024px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`;

export const Title = styled.div`
    color: rgb(90, 90, 90);
    margin-bottom: 1rem;
 
`;

export const Name = styled(Title)`
    font-size: 0.8rem;
`;

export const Copyright = styled(Title)`
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
`;