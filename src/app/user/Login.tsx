// module
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// source
import { UserService } from 'src/api';
import { Container, Logo, Header, Navigator, Label } from './component';
// type
type FormProps = {
    email : string;
    password : string;
    isStaySignedIn : boolean;
};
// component
export function Login() {
    const onFinish = ({email, password, isStaySignedIn } : FormProps) => {
        let isLoginSuccess = UserService.login(email, password, isStaySignedIn);
        if(isLoginSuccess) {
            console.log("로그인에 성공했습니다.");
        } else {
            console.log("로그인에 실패했습니다.");
        }
    };

    return(
        <Container>
            <Logo />
            <Header>Login</Header>
            <Navigator 
                text="Have not account yet?" 
                link={<Link to="/user/signup">Sign Up</Link>} />
            <Form
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
                initialValues={{isStaySignedIn : true}}>
                <Form.Item
                    name="email"
                    label={<Label>Email</Label>}
                    rules={[{ required: true, message: 'Please input your email address.'}]}>
                    <Input
                        size="large" 
                        prefix={<UserOutlined />}
                        placeholder="Enter email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label={<Label>Password</Label>}
                    rules={[{ required:true, message: 'Please input your password.'}]}>
                    <Input.Password 
                        size="large" 
                        prefix={<LockOutlined />}
                        placeholder="Enter password" />
                </Form.Item>
                <Form.Item
                    name="isStaySignedIn"
                    valuePropName="checked">
                    <Checkbox>
                        Stay signed in
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button 
                        htmlType="submit"
                        type="primary"
                        size="large"
                        block={true}>
                        Sign in
                    </Button>
                </Form.Item>
                <Link to="/user/recovery" style={{ float: 'right'}}>Forgot password?</Link>
            </Form>
        </Container>
    )
}
export default Login;