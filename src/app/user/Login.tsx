// module
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Checkbox } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
// source
import { Container } from './component/Container';
import { Logo } from './component/Logo';
import { Header } from './component/Header';
import { Navigator } from './component/Navigator';
import { Label } from './component/Label';
// component
export function Login() {
    return(
        <Container>
            <Logo />
            <Header>Login</Header>
            <Navigator 
                text="Have not account yet?" 
                link={<Link to="/user/signup">Sign Up</Link>} />
            <Form
                layout="vertical"
                requiredMark={false}>
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
                        prefix={<KeyOutlined />}
                        placeholder="Enter password" />
                </Form.Item>
                <Form.Item
                    name="staySiginin">
                    <Checkbox 
                        checked={true}>
                        Stay signed in
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button 
                        type="primary"
                        size="large"
                        block={true}>
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
            <Link to="/user/recovery" style={{ alignSelf: 'flex-end'}}>Forgot password?</Link>
        </Container>
    )
}
export default Login;