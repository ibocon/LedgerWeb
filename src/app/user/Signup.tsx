// module
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input, Alert } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
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
                    validateTrigger='onBlur'
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
                    validateTrigger='onBlur'
                    hasFeedback
                    rules={[
                        () => ({
                            validator(_, value : string) {
                                if(value.length < 8)
                                    // https://owasp.org/www-community/password-special-characters
                                    return Promise.reject("Password length must be at least 8 characters");
                                if(value.match(/[ !"#$%&'()*+,-./:<;=?>@[\\^\]_`{|}~]/) === null)
                                    return Promise.reject("Password must include at least 1 special character");
                                if(value.match(/[0-9]/) === null)
                                    return Promise.reject("Password must include at least 1 number character");

                                return Promise.resolve();
                            }
                        })]}>
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
                        htmlType="submit"
                        type="primary"
                        size="large"
                        block={true}>
                        Sign Up {status === 'pending' && <LoadingOutlined style={{ fontSize: '16px' }} /> }
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    );
}
export default Signup;