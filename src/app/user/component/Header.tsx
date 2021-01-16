// module
import React from 'react';
import { Typography } from 'antd';
// type
const { Title } = Typography;
// component
export function Header(props : {children : React.ReactNode}) {
    return (
        <Title 
            ellipsis={true}
            style={{
                alignSelf: 'center',
                lineHeight: 1.32,
                marginTop: '15px',
                color: 'rgb(95, 95, 95)'
            }}>
            {props.children}
        </Title>
    );
}
export default Header;