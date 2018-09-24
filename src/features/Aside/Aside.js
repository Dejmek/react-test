import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FaList,
    FaEnvelope,
    FaCalendarAlt,
    FaFolder,
    FaChartBar,
    FaUser,
    FaDatabase,
} from 'react-icons/fa';
import styled from 'styled-components';
import AsideComponent from '../../components/Aside/Aside';
import List from '../../components/List/List';
import ListItem from '../../components/List/ListItem';

class Aside extends Component {
    render() {
        const { className } = this.props;
        return (
            <AsideComponent className={className}>
                <List>
                    <ListItem icon={<FaList />}>Dashboard</ListItem>
                    <ListItem icon={<FaEnvelope />}>Campaigns</ListItem>
                    <ListItem icon={<FaCalendarAlt />}>Workflows</ListItem>
                    <ListItem icon={<FaFolder />}>Templates</ListItem>
                    <ListItem icon={<FaChartBar />}>Stats</ListItem>
                    <ListItem icon={<FaUser />}>Contacts</ListItem>
                    <ListItem icon={<FaDatabase />} active>
                        Surveys
                    </ListItem>
                </List>
            </AsideComponent>
        );
    }
}

Aside.propTypes = {
    className: PropTypes.string.isRequired,
};

export default styled(Aside)`
    height: calc(100vh - 6rem);
    width: 15rem;
    padding-top: 2rem;
`;
