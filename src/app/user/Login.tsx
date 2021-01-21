// module
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// source
import { Container, Logo, Header, Navigator, Label } from './component';
import { login } from 'src/app/feature/user';
// component
export function Login() {
    const dispatch = useDispatch();
    // 2021.01.21 TODO login 요청을 대기하면서, 로그인 실패 시 적절한 오류 메세지를 UI 에 표시하자.
    const onFinish = async ({email, password, isStaySignedIn } : LoginRequest) => {
        const resultAction = await dispatch(login({email, password, isStaySignedIn}));
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