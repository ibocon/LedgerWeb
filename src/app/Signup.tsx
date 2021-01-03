// Modules
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

// Styles
import 'antd/dist/antd.css';

// Component
export function Signup() {
    return(
        <Layout>
            <Link to="/">Signup</Link>
        </Layout>
    );
}

export default Signup;