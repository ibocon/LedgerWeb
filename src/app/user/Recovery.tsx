// module
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';
// type
const { Title } = Typography;
// style
// component
export function Recovery() {
    return(
        <Layout>
            <Title level={3}>Recovery</Title>
            <Link to="/">Under construction...</Link>
        </Layout>
    );
}
export default Recovery;