import styled from 'styled-components';


export const Section = styled.section`
    width: 100%;
    margin: 0 auto; 
    padding: 0.2rem;
`;

export const ListBorder = styled.div`
    width: 100%;
    & > div:nth-child(1){
            height: 3rem;
            text-indent:0.5rem;
            color: #302e2e;
            font-weight: bold;
            line-height: 3rem;
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;
