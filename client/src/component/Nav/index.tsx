import { useHistory } from 'react-router-dom';
import { Wrap, CategoryBorder, Perfume, Test, Search, LogoBorder, Logo, UserBtnBorder, Mypage, Login, Signup  } from './styles';

function Nav()  {

    const history = useHistory();

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