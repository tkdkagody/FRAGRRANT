import { Wrap, Container, Close, Header, Form, Label, Input, Button } from './styles';

function Signup () {

    return(
        <Wrap>
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
                    </Label>
                    <Button >회원가입</Button>
                </Form>
            </Container>
        </Wrap>
    );

};

export default Signup;