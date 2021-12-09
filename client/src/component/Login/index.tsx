import { Black, Container, Close, Header, Form, Label, Input, Button, Error } from  './styles'
import { useCallback, useState } from 'react';
import axios from 'axios';
import useInput from '../../hooks/useInput';

interface MainProps {
    loginModal : boolean;
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

axios.defaults.withCredentials = true;
const Login = ({loginModal, setLoginModal } : MainProps) => {

    const [loginEmail, setLoginEmail] = useInput('');
    const [loginPass, setLoginPass] = useInput('');
    const [signInError, setSignInError] = useState('');

    const onSubmit = useCallback((e)=> {
        e.preventDefault();
        console.log(loginEmail,loginPass);
        if(loginEmail && loginPass){
            console.log('서버로 로그인');
        }
    },[loginEmail,loginPass])

    const handleClickClose = () => {
        setLoginModal(false);
    }

    return(
        <Black>
            <Container>
                <Close onClick={handleClickClose}>
                    <img src="../../icons/close.svg"></img>
                </Close>
                <Header>Login</Header>
                <Form onSubmit={onSubmit}>
                    <Label>
                        <span>이메일 주소</span>
                        <div>
                            <Input value={loginEmail} onChange={setLoginEmail}/> 
                        </div>
                    </Label> 
                    <Label>
                        <span>비밀번호</span>
                        <div>
                            <Input value={loginPass} onChange={setLoginPass}/>
                        </div>
                        {signInError && <Error>{signInError}</Error>}
                    </Label>                   
                    <Button>로그인</Button>
                </Form>
                
            </Container>
        </Black>
    )
}

export default Login;