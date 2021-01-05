// Modules
import React from 'react';
import { Layout } from 'antd';

// Sources
import { 
    Header, 
    Sider 
} from 'src/component';

// Styles
import './Board.sass';

export function Board() {
    return(
        <Layout>
            <Sider />
            <Layout className="site-layout">
                <Header />
                <Layout.Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default Board;