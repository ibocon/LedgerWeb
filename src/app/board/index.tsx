// module
import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
// source
import { BreakPointType } from 'src/app/component';
import { Header } from './Header';
import { Sider } from './Sider';
// style
const StyledContent = styled(Layout.Content)`
    background-color: rgb(255,255,255);
    margin: 24px 18px;
    padding: 24px;
    min-height: 600px;
`;
// component
export function BoardPage(props : {}) {
    return(
        <Layout style={{ minWidth: BreakPointType.Small}}>
            <Sider />
            <Layout style={{ backgroundColor: 'rgb(235,235,235)' }}>
                <Header />
                <StyledContent>
                    
                </StyledContent>
            </Layout>
        </Layout>
    );
}
export default BoardPage;