// Modules
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

// Styles
import 'antd/dist/antd.css';

// Component
export function Login() {
    return(
        <Layout>
            <Link to="/">Login</Link>
        </Layout>
    );
}

export default Login;