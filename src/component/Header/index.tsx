// Modules
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Layout } from 'antd';

// Sources
import { RootState } from 'src/store/rootReducer';
import { CollapseMenu } from './CollapseMenu';

// Styles
const StyledHeader = styled(Layout.Header)`
    padding: 0;
    background: #ffffff;
`;

// Redux
const mapStateToProps = (state: RootState) => ({

});

const dispatchProps = {

};

type Props = {

};

// Component
const FuncComponent : React.FC<Props> = props => {

  return (
    <StyledHeader>
        <CollapseMenu />
    </StyledHeader>
  );
};

export const Header =  connect(mapStateToProps, dispatchProps)(FuncComponent);
export default Header;
