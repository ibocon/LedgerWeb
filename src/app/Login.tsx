// Modules
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

// Styles

// Component
export function Login() {
    return(
        <Layout>
            <Link to="/">Login</Link>
        </Layout>
    );
}

export default Login;