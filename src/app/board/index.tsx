// module
import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
// source
import { Header } from 'src/app/component';
import { Sider } from './sidebar';
// style
const StyledContent = styled(Layout.Content)`
    background-color: #ffffff;
    margin: 24px 16px;
    padding: 24px;
    min-height: 280px;
`;
// component
export function BoardPage(props : {}) {
    return(
        <Layout>
            <Sider />
            <Layout style={{ backgroundColor: '#ffffff' }}>
                <Header />
                <StyledContent>
                    
                </StyledContent>
            </Layout>
        </Layout>
    );
}
export default BoardPage;