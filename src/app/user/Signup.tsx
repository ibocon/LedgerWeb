// module
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// source
import { Container, Logo, Header, Navigator, Label } from './component';
// component
export function Signup() {
    return(
        <Container>
            <Logo />
            <Header>Sign Up</Header>
            <Navigator 
                text="Already have an account?" 
                link={<Link to="/user/login">Login</Link>} />
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
                        prefix={<LockOutlined />}
                        placeholder="Enter password" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    label={<Label>Confirm password</Label>}
                    rules={[{ required:true, message: 'Please confirm your password.'}]}>
                    <Input.Password 
                        size="large" 
                        prefix={<LockOutlined />}
                        placeholder="Confirm password" />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        size="large"
                        block={true}>
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    );
}
export default Signup;