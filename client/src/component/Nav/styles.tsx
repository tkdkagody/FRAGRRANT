import styled from 'styled-components';

export const Wrap = styled.section`
    background-color: #D9D0C7;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
`;
export const LogoBorder = styled.div`
    width: 60%;
    height: 100%;
    font-size: 1.6rem;
    text-align: center;
    line-height: 5rem;
    display:flex;
    align-items:center; 
    justify-content: center;
`;

export const Logo = styled.div`
    width: 11rem;
    cursor:pointer; 
`;

export const CategoryBorder = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction:row; 
    align-items:center;
    justify-content: space-around;

`;
export const Perfume= styled.span`
    display: block;
    font-size:1rem;
    width: 5rem;
    height: 2rem;
    line-height: 2rem;
    text-align:center; 
    cursor: pointer;

`;
export const Test = styled(Perfume)``;
export const Search = styled(Perfume)``;

export const UserBtnBorder = styled(CategoryBorder)`

`;
export const Login = styled(Perfume)``;
export const Signup = styled(Perfume)``;
export const Mypage = styled(Perfume)`
cursor:default;
`;