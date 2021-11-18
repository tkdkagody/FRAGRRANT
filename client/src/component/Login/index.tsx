import { Black, Container, Close, Header, Form, Label, Input, Button } from  './styles'


const Login = () => {
    return(
        <Black>
            <Container>
                <Close>
                    <img src="../../icons/close.svg"></img>
                </Close>
                <Header>Login</Header>
                <Form>
                    <Label>
                        <span>이메일 주소</span>
                        <div>
                            <Input/> 
                        </div>
                    </Label>
                   
                    
                    <Label>
                        <span>비밀번호</span>
                        <div>
                            <Input />
                        </div>
                    </Label>
                    
                    <Button>로그인</Button>
                </Form>
                
            </Container>
        </Black>
    )
}

export default Login;