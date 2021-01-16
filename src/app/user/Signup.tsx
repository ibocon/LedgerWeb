// module
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
// source
import { Container } from './component/Container';
import { Logo } from './component/Logo';
import { Header } from './component/Header';
import { Navigator } from './component/Navigator';
import { Label } from './component/Label';
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
                        prefix={<KeyOutlined />}
                        placeholder="Enter password" />
                </Form.Item>
                <Form.Item>
                    <Button
                        style={{ 
                            float: 'right',
                            minWidth: '150px' }}
                        type="primary"
                        size="large">
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    );
}
export default Signup;