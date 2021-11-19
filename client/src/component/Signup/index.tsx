import { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';
import { Black, Container, Close, Header, Form, Label, Input, Button, LinkContainer, Error, Success } from './styles';
import axios from 'axios';

interface MainProps {
    signupModal: boolean; 
    setSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Signup ({signupModal, setSignupModal} : MainProps) {

    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [phonenum, onChangePhonenum] = useInput('');
    const [password, , setPassword] = useInput('');
    const [passwordCheck, , setPasswordCheck] = useInput('');
    const [mismatchError, setMismatchError] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const onChangePassword = useCallback(
        (e) => {
          setPassword(e.target.value);
          setMismatchError(e.target.value !== passwordCheck);
        },
        [passwordCheck],
      );
    
    const onChangePasswordCheck = useCallback(
        (e) => {
          setPasswordCheck(e.target.value);
          setMismatchError(e.target.value !== password);
        },
        [password],
    );

    const onSubmit = useCallback((e)=> {
        e.preventDefault();
        if(!mismatchError && email && nickname && phonenum) {
            console.log('서버로 회원가입');
            setSignUpError('');
            setSignUpSuccess(false);
            console.log(email,
                nickname,
                phonenum,
                password)
            // axios.post('',{
            //     email,
            //     nickname,
            //     phonenum,
            //     password
            // })
        }
        //유효성검사
        //axios
        //메인페이지로 이동
    },[email, nickname, password, passwordCheck, mismatchError],)
      

    const handleClickClose = () => {
        setSignupModal(false);
    }

    return(
        <Black>
            <Container>
                <Close onClick={handleClickClose}>
                    <img src="../../icons/close.svg"></img>
                </Close>
                <Header>Sign Up</Header>
                <Form onSubmit={onSubmit}>
                    <Label>
                        <span>이메일 주소</span>
                        <div>
                            <Input value={email} onChange={onChangeEmail}/> 
                        </div>
                    </Label>
                    <Label >
                        <span>닉네임</span>
                        <div>
                            <Input  value={nickname} onChange={onChangeNickname}/>
                        </div>
                    </Label>
                    <Label >
                        <span>휴대폰번호</span>
                        <div>
                            <Input value={phonenum} onChange={onChangePhonenum}/>
                        </div>
                    </Label>
                    <Label>
                        <span>비밀번호</span>
                        <div>
                            <Input value={password} onChange={onChangePassword} />
                        </div>
                    </Label>
                    <Label >
                        <span>비밀번호 확인</span>
                        <div>
                            <Input value={passwordCheck} onChange={onChangePasswordCheck}/>
                        </div>
                        {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
                        {/* {!nickname && <Error>닉네임을 입력해주세요.</Error>} */}
                        {signUpError && <Error>{signUpError}</Error>}
                        {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
                    </Label>
                    <Button >회원가입</Button>
                </Form>
                <LinkContainer>
                    이미 회원이신가요 ? &nbsp;
                    <span>로그인하러가기(모달오픈)</span>
                </LinkContainer>
            </Container>
        </Black>
    );

};

export default Signup;