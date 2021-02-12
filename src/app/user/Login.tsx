// module
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input, Checkbox, Alert } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
// source
import { useAppDispatch, login, selectNotification, notify, selectUserId } from 'src/app/feature';
import { isFail, isUserModel } from 'src/app/component';
import { Container, Logo, Header, Navigator, Label } from './component';
// component
export function Login() {
    const history = useHistory();
    const dispatch = useAppDispatch();    
    const [status, setStatus] = useState<AsyncStatus>('idle');
    const userId = useSelector(selectUserId);
    const notification = useSelector(selectNotification);

    useEffect(() => {
        if(userId)
            history.push('/board');
    },[history, userId]);

    const onFinish = async ({email, password, isStaySignedIn } : LoginRequest) => {
        try {
            setStatus('pending');
            const result = unwrapResult(await dispatch(login({email, password, isStaySignedIn})));
            if(isUserModel(result)) {
                history.push('/board');
                setStatus('fulfilled');
            } else if (isFail(result)) {
                dispatch(notify({ level: 'warning', message: `${result.error.message}`}));
                setStatus('rejected');
            }
            else {
                throw Error('Something went wrong...');
            }
        } catch (error) {
            dispatch(notify({ level: 'error', message: 'Error occured. please contact administrator.'}));
            setStatus('rejected');
        }
    };

    return(
        <Container>
            <Logo />
            <Header>Login</Header>
            <Navigator 
                text="Have not account yet?" 
                link={<Link to="/user/signup" tabIndex={-1}>Sign Up</Link>} />
            <Form
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
                initialValues={{isStaySignedIn : true}}>
                <Form.Item
                    name="email"
                    label={<Label>Email</Label>}
                    validateTrigger='onBlur'
                    rules={[{ type: 'email', required: true, message: 'Please input your email address.'}]}>
                    <Input
                        size="large" 
                        prefix={<UserOutlined />}
                        placeholder="Enter email"
                        tabIndex={1} />
                </Form.Item>
                <Form.Item
                    name="password"
                    label={<Label>Password</Label>}
                    validateTrigger='onSubmit'
                    rules={[{ required:true, message: 'Please input your password.'}]}>
                    <Input.Password 
                        size="large" 
                        prefix={<LockOutlined />}
                        placeholder="Enter password"
                        tabIndex={2} />
                </Form.Item>
                {notification.level !== undefined && 
                    <Alert 
                        style={{ marginBottom: '10px' }} 
                        type={notification.level} 
                        message={notification.message} 
                        showIcon 
                        closable />
                }
                <Form.Item 
                    name="isStaySignedIn"
                    valuePropName="checked">
                    <Checkbox tabIndex={-1}>
                        Stay signed in
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button 
                        htmlType="submit"
                        type="primary"
                        size="large"
                        block={true}
                        tabIndex={3}>
                        Sign in {status === 'pending' && <LoadingOutlined style={{ fontSize: '16px' }} /> }
                    </Button>
                </Form.Item>
                <Link to="/user/recovery" tabIndex={-1} style={{ display: 'inline', float: 'right'}}>Forgot password?</Link>
            </Form>
        </Container>
    )
}
export default Login;