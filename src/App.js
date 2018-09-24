import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Chance from 'chance';
import Header from './features/Header/Header';
import Aside from './features/Aside/Aside';
import FeatureHolder from './features/FeatureHolder/FeatureHolder';
import Surveys from './features/Surveys/Surveys';
import theme from './theme';

const chance = new Chance();

const Test = styled.a``;

const Grid = styled.div`
    ${Test}:hover {
        border: 1px solid;
    }
    display: flex;
    flex-flow: wrap;
    height: 100vh;
`;

const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const rows = Array.from({ length: 10 }).map(() => ({
    title: chance.first(),
    state: chance.string({ pool }),
    viewed: chance.integer({ min: 0, max: 999 }),
    answered: chance.integer({ min: 0, max: 999 }),
    folder: chance.string({ pool }),
    created: chance.date({ string: true }),
    validUntil: chance.date({ string: true }),
    guid: chance.string(),
    checked: false,
    active: false,
}));

const App = (props) => {
    const { className } = props;
    return (
        <ThemeProvider theme={theme}>
            <Grid className={className}>
                <Test />
                <Header />
                <Aside />
                <FeatureHolder feature={<Surveys rows={rows} />} />
            </Grid>
        </ThemeProvider>
    );
};

App.defaultProps = {
    className: null,
};

App.propTypes = {
    className: PropTypes.string,
};

export default App;
