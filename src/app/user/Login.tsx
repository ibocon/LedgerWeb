// module
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input, Checkbox, Alert } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
// source
import { Container, Logo, Header, Navigator, Label } from './component';
import { login } from 'src/app/feature';
import { useAppDispatch } from 'src/app/store';
import { isFail, isUserModel } from 'src/app/component';
// type
// component
export function Login() {
    const [status, setStatus] = useState<AsyncStatus>('idle');
    const [error, setError] = useState<AntdAlertOptions>({ type: 'success', message: ''});

    const dispatch = useAppDispatch();
    const history = useHistory();

    const onFinish = async ({email, password, isStaySignedIn } : LoginRequest) => {
        try {
            setStatus('pending');
            const result = unwrapResult(await dispatch(login({email, password, isStaySignedIn})));
            if(isUserModel(result)) {
                history.push('/board');
            } else if (isFail(result)) {
                setError({ type: 'warning', message: `Login failed. ${result.error.message}` });
                setStatus('rejected');
            }
            else {
                throw Error('Something went wrong...');
            }
            setStatus('fulfilled');
        } catch (error) {
            setError({ type: 'error', message: 'Error occured. please contact administrator.' });
            setStatus('rejected');
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
                    validateTrigger='onSubmit'
                    rules={[{ type: 'email', required: true, message: 'Please input your email address.'}]}>
                    <Input
                        size="large" 
                        prefix={<UserOutlined />}
                        placeholder="Enter email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label={<Label>Password</Label>}
                    validateTrigger='onSubmit'
                    rules={[{ required:true, message: 'Please input your password.'}]}>
                    <Input.Password 
                        size="large" 
                        prefix={<LockOutlined />}
                        placeholder="Enter password" />
                </Form.Item>
                {status === 'rejected' && <Alert style={{ marginBottom: '10px' }} type={error.type} message={error.message} showIcon closable />}
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
                        Sign in {status === 'pending' && <LoadingOutlined style={{ fontSize: '16px' }} /> }
                    </Button>
                </Form.Item>
                <Link to="/user/recovery" style={{ display: 'inline', float: 'right'}}>Forgot password?</Link>
            </Form>
        </Container>
    )
}
export default Login;