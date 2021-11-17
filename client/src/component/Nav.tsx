import * as React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

function Nav()  {

    const history = useHistory();


    const Wrap = styled.section`
        background-color: #D9D0C7;
        width: 100%;
        height: 5rem;
        display: flex;
        flex-direction: row;
    `;
    const LogoBorder = styled.div`
        width: 60%;
        height: 100%;
        font-size: 1.6rem;
        text-align: center;
        line-height: 5rem;
        display:flex;
        align-items:center; 
        justify-content: center;
    `;

    const Logo = styled.div`
        width: 11rem;
        cursor:pointer; 
    `;

    const CategoryBorder = styled.div`
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction:row; 
        align-items:center;
        justify-content: space-around;
        
    `;
    const Perfume= styled.span`
        display: block;
        font-size:1rem;
        width: 5rem;
        height: 2rem;
        line-height: 2rem;
        text-align:center; 
        cursor: pointer;

    `;
    const Test = styled(Perfume)``;
    const Search = styled(Perfume)``;

    const UserBtnBorder = styled(CategoryBorder)`
        
    `;
    const Login = styled(Perfume)``;
    const Signup = styled(Perfume)``;
    const Mypage = styled(Perfume)`
        cursor:default;
    `;

    return (
        <Wrap>
            <CategoryBorder>
                <Perfume>Perfume</Perfume>
                <Test>Test</Test>
                <Search>Search</Search>
            </CategoryBorder>
            <LogoBorder> 
                <Logo onClick={() => history.push('/')}>FRAGRANT</Logo>
                </LogoBorder>
            <UserBtnBorder>
                <Mypage></Mypage>
                <Login>Login</Login>
                <Signup>Signup</Signup>
            </UserBtnBorder>
        </Wrap>
    )
}

export default Nav;