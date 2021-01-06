// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Sources
import { BreakPoint } from 'src/component';
import { RightMenuItem } from './styled';
// Component
const FuncComponent : React.FC = props => {

    function onResized() {
        if(window.innerWidth < BreakPoint.Medium)
            setCollapsed(true);
        else
            setCollapsed(false);
    }

    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", onResized);
        return () => window.removeEventListener("resize", onResized);
    });

    return(
        <React.Fragment>
            <RightMenuItem>
                <Link to="/login">Login</Link>
            </RightMenuItem>
        {!collapsed &&
            <RightMenuItem>
                <Link to="/signup">Signup</Link>
            </RightMenuItem>
        }
        </React.Fragment>
    );
}
export const UserMenu = connect()(FuncComponent);
export default UserMenu;