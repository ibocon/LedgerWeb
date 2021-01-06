// Modules
import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

// Sources
import { 
    Header, 
    Sider 
} from 'src/component';

// Styles
const StyledContent = styled(Layout.Content)`
    background-color: #ffffff;
    margin: 24px 16px;
    padding: 24px;
    min-height: 280px;
`;

// Component
const FuncComponent : React.FC = props => {
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
export const BoardPage = FuncComponent;
export default BoardPage;