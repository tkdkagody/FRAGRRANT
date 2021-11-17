import { Black, Container, Close, Header, Form, Label, Input, Button, LinkContainer } from './styles';

function Signup () {

    return(
        <Black>
            <Container>
                <Close>
                    <img src="../../icons/close.svg"></img>
                </Close>
                <Header>Sign Up</Header>
                <Form>
                    <Label>
                        <span>이메일 주소</span>
                        <div>
                            <Input/> 
                        </div>
                    </Label>
                    <Label >
                        <span>닉네임</span>
                        <div>
                            <Input />
                        </div>
                    </Label>
                    <Label >
                        <span>휴대폰번호</span>
                        <div>
                            <Input />
                        </div>
                    </Label>
                    <Label>
                        <span>비밀번호</span>
                        <div>
                            <Input />
                        </div>
                    </Label>
                    <Label >
                        <span>비밀번호 확인</span>
                        <div>
                            <Input/>
                        </div>
                         {/* {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>} */}
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