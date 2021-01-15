// module
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
// type
export type SignupProps = {

}
// component
export function Signup(props : SignupProps) {
    return(
        <Layout>
            <Link to="/">Signup</Link>
        </Layout>
    );
}
export default Signup;