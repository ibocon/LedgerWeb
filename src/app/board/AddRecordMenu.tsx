// module
import React, { useState } from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// component
export function AddRecordMenu() {
    const [isAddButtonEnabled, setIsAddButtonEnabled] = useState(false);

    const onAddButtonClicked = () => {
        setIsAddButtonEnabled(!isAddButtonEnabled);
    };

    const addMenu = (
        <Menu>
            <Menu.Item>
                <Button 
                    shape='circle'
                    style={{ }}>
                    Transfer
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button 
                    shape='circle'
                    style={{ }}>
                    Income
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button 
                    shape='circle'
                    style={{ }}>
                    Expense
                </Button>
            </Menu.Item>
        </Menu>
    );

    return(
        <Dropdown overlay={addMenu} placement="topRight">
            <Button 
                type='primary' 
                shape='circle'
                icon={<PlusOutlined 
                    rotate={isAddButtonEnabled ? 45 : 0 }
                    style={{ fontSize: '32px' }} />
                }
                style={{
                    width: '50px',
                    height: '50px',
                    border: '1px solid rgb(90,90,90)',
                }}
                onClick={onAddButtonClicked}/>
        </Dropdown>
    );
}
export default AddRecordMenu;