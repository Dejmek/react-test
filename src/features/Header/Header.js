import React, { Component } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import HeaderComponent from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import NavItem from '../../components/Nav/NavItem';

class Header extends Component {
    render() {
        return (
            <HeaderComponent height="4rem">
                <Nav>
                    <NavItem label="help" />
                    <NavItem label="clever store" />
                    <NavItem label="other" icon={<FaChevronDown />} />
                </Nav>
            </HeaderComponent>
        );
    }
}

export default Header;
