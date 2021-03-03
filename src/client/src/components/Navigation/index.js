import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styles';

const Navigation = () => {
    return (
        <Styled.Navigation>
            <Styled.List>
                <Styled.Item>
                    <NavLink to="/">Home</NavLink>
                </Styled.Item>
                <Styled.Item>
                    <NavLink to="/messages">Messages</NavLink>
                </Styled.Item>
                <Styled.Item>
                    <NavLink to="/settings">Settings</NavLink>
                </Styled.Item>
            </Styled.List>
        </Styled.Navigation>
    );
};

export default Navigation;
