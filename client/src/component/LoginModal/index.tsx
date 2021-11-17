import { Wrap, Header, Form, Label, Input,Button } from './styles';

function LoginModal () {

    return(
        <Wrap>
        <Header>Login</Header>
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
            <Label>
                <span>비밀번호</span>
                <div>
                    <Input  />
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
        </Wrap>
    );

};

export default LoginModal;