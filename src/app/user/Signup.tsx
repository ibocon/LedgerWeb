// module
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// source
import { Container, Logo, Header, Navigator, Label } from './component';
import { signup } from 'src/app/feature';
import { useAppDispatch } from 'src/app/store';
// component
export function Signup() {
    const [status, setStatus] = useState<AsyncStatus>('idle');
    const [error, setError] = useState<AntdAlertOptions>({ type: 'success', message: ''});
    const dispatch = useAppDispatch();

    // 2021.02.01 TODO 여기서부터 작업하자.
    const onFinish = async ({email, password} : {email: string, password: string, confirmPassword: string}) => {
        try {
            setStatus('pending');
            const result = unwrapResult(await dispatch(signup({email, password})));
            setStatus('fulfilled');
        } catch(error) {
            throw Error('Something went wrong...');
        }
    };

    return(
        <Container>
            <Logo />
            <Header>Sign Up</Header>
            <Navigator 
                text="Already have an account?" 
                link={<Link to="/user/login">Login</Link>} />
            <Form
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}>
                <Form.Item
                    name="email"
                    label={<Label>Email</Label>}
                    rules={[{
                        type: 'email',
                        message: 'The input is not valid email address.',
                    }, { 
                        required: true, 
                        message: 'email address is required to signup.'}]}>
                    <Input
                        size="large"
                        prefix={<UserOutlined />}
                        placeholder="Enter email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label={<Label>Password</Label>}
                    hasFeedback
                    rules={[{ required:true, message: 'Please input your password.'}]}>
                    <Input.Password 
                        size="large" 
                        prefix={<LockOutlined />}
                        placeholder="Enter password" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    label={<Label>Confirm password</Label>}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                          required: true,
                          message: 'Please confirm your password.',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value)
                              return Promise.resolve();
                            return Promise.reject('The two passwords that you entered do not match.');
                          },
                        }),
                      ]}>
                    <Input.Password 
                        size="large" 
                        prefix={<LockOutlined />}
                        placeholder="Confirm password" />
                </Form.Item>
                {status === 'rejected' && <Alert style={{ marginBottom: '10px' }} type={error.type} message={error.message} showIcon closable />}
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