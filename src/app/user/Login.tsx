// module
import React from 'react';
import styled from 'styled-components';
import { Layout, Typography, Button, Form, Input, Checkbox } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
// source
import { BreakPoint } from 'src/component/styled';
// type
export type LoginProps = {

}
// style
const { Title } = Typography;

const Container = styled(Layout)`
    // layout
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-width: 300px;
    width: ${BreakPoint.Small}px;
    min-height: 600px;
    // padding
    padding-top: 48px;
    padding-left: 40px;
    padding-bottom: 36px;
    padding-right: 40px;
    // border
    box-sizing: border-box;
    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;
    // background
    background-color: rgb(255,255,255);

    @media(max-width: ${BreakPoint.Small}px) {
        width: 100vw;
        height: 100vh;
        align-items: stretch;
        justify-content: stretch;
    }
`;
const StyledLabel = styled.label`
    color: rgb(105, 105, 105);
`;
// component
export function Login(props : LoginProps) {

    return(
        <Container>
            <Title 
                level={3} 
                style={{ alignSelf: 'center', color: 'rgb(140, 140, 140)' }} 
                ellipsis={true}> 
                Ledger
            </Title>
            <Title 
                style={{ alignSelf: 'center', lineHeight: 1.32, marginTop: '15px' }} 
                ellipsis={true}>
                Sign in
            </Title>
            <Form
                layout="vertical"
                requiredMark={false}>
                <Form.Item
                    name="email"
                    label={<StyledLabel>Email</StyledLabel>}
                    rules={[{ required: true, message: 'Please input your email address.'}]}>
                    <Input 
                        size="large" 
                        prefix={<UserOutlined />}
                        placeholder="Enter email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label={<StyledLabel>Password</StyledLabel>}
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
        </Container>
    )
}
export default Login;