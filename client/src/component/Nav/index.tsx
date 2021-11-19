import { useHistory } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import { Wrap, CategoryBorder, Perfume, Test, Search, LogoBorder, Logo, UserBtnBorder, Mypage, LoginCate, SignupCate  } from './styles';


interface MainProps {
    loginModal : boolean;
    signupModal: boolean; 
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
    setSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav({loginModal, signupModal, setLoginModal, setSignupModal} : MainProps)  {

    const history = useHistory();

    const handleClickLogin = () => {
        if(!loginModal){
            setLoginModal(true);
        }
    }

    const handleClickSignup = () => {
        if(!signupModal) {
            setSignupModal(true);
        }
    }

       return (
        <Wrap>
            <CategoryBorder>
                <Perfume onClick={()=> history.push('/perfume')}>Perfume</Perfume>
                <Test onClick={()=> history.push('/test')}>Test</Test>
                <Search onClick={()=> history.push('/search')}>Search</Search>
            </CategoryBorder>
            <LogoBorder> 
                <Logo onClick={() => history.push('/')}>FRAGRANT</Logo>
                </LogoBorder>
            <UserBtnBorder>
                <Mypage></Mypage>
                <LoginCate onClick={handleClickLogin}>Login
                    {loginModal ? <Login 
                        loginModal={loginModal} 
                        setLoginModal={setLoginModal}  
                    /> : null }
                </LoginCate>
                <SignupCate onClick={handleClickSignup}>Signup
                    {signupModal ? <Signup 
                        signupModal={signupModal}
                        setSignupModal={setSignupModal}
                    /> : null}
                </SignupCate>
            </UserBtnBorder>
        </Wrap>
    )
}

export default Nav;