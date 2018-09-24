import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './SurveysHeader';
import Checkbox from '../Checkbox/Checkbox';
import Card from '../Card/Card';
import Avatar from '../../components/Avatar/Avatar';

const StyledTd = styled.td`
    width: ${props => props.cellWidth || 10}rem;
    ${props => (props.paddingLeft ? `padding-left:${props.paddingLeft}rem;` : '')} overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const InCardTable = styled.table`
    width: 100%;
`;

const MainTable = styled.table`
    table-layout: fixed;
    margin-top: 2rem;
    td:nth-child(2) {
        padding-left: 1rem;
    }
    & > tbody > tr > td {
        padding-top: 1rem;
    }
    & > thead > tr:first-of-type td:last-child {
        padding-right: 1.1rem;
    }
`;

class Surveys extends Component {
    constructor(props) {
        const { rows } = props;
        const checkboxes = [];
        const cards = [];
        super(props);
        this.state = {
            rows: rows.map(row => Object.assign({}, row, {
                checkboxLink() {
                    checkboxes.push(this);
                },
                cardLink() {
                    cards.push(this);
                },
            })),
            checkedAll: false,
        };
        this.checkboxes = checkboxes;
        this.cards = cards;
    }

    shouldComponentUpdate() {
        return false;
    }

    toggleAll() {
        const { checkedAll } = this.state;
        const checked = !checkedAll;
        this.checkboxes.forEach((checkbox) => {
            checkbox.setState({
                checked,
            });
        });
        this.setState({
            checkedAll: checked,
        });
    }

    closeOtherCards(targetCard) {
        this.cards.forEach(
            card => targetCard !== card
                && card.setState({
                    active: false,
                }),
        );
    }

    render() {
        const { checkedAll, rows } = this.state;
        return (
            <form>
                <Header />
                <MainTable>
                    <thead>
                        <tr>
                            <td>
                                <Checkbox
                                    name="check-all"
                                    checked={checkedAll}
                                    onChange={(e) => {
                                        this.toggleAll(e);
                                    }}
                                />
                            </td>
                            <td>
                                <InCardTable>
                                    <tbody>
                                        <tr>
                                            <StyledTd paddingLeft={2} cellWidth={12}>
                                                <span>Title</span>
                                            </StyledTd>
                                            <StyledTd cellWidth={10}>
                                                <span>State</span>
                                            </StyledTd>
                                            <StyledTd>
                                                <span>Viewed</span>
                                            </StyledTd>
                                            <StyledTd>
                                                <span>Answered</span>
                                            </StyledTd>
                                            <StyledTd>
                                                <span>Folder</span>
                                            </StyledTd>
                                            <StyledTd>
                                                <span>Created</span>
                                            </StyledTd>
                                            <StyledTd>
                                                <span>Valid Until</span>
                                            </StyledTd>
                                            <StyledTd>
                                                <span>Created by</span>
                                            </StyledTd>
                                        </tr>
                                    </tbody>
                                </InCardTable>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row.guid}>
                                <td>
                                    <Checkbox
                                        link={row.checkboxLink}
                                        name={row.title}
                                        checked={row.checked}
                                        width={1.5}
                                        height={1.5}
                                        strokeWidth={10}
                                        strokeDasharray={10}
                                        rx={50}
                                        ry={50}
                                    />
                                </td>
                                <td>
                                    <Card
                                        onChange={(targetCard) => {
                                            this.closeOtherCards(targetCard);
                                        }}
                                        link={row.cardLink}
                                        active={row.active}
                                        width={88}
                                        height={5}
                                    >
                                        <InCardTable>
                                            <tbody>
                                                <tr>
                                                    <StyledTd paddingLeft={2} cellWidth={12}>
                                                        <span>{row.title}</span>
                                                    </StyledTd>
                                                    <StyledTd>
                                                        <span>{row.state}</span>
                                                    </StyledTd>
                                                    <StyledTd>
                                                        <span>{row.viewed}</span>
                                                    </StyledTd>
                                                    <StyledTd>
                                                        <span>{row.answered}</span>
                                                    </StyledTd>
                                                    <StyledTd>
                                                        <span>{row.folder}</span>
                                                    </StyledTd>
                                                    <StyledTd>
                                                        <span>{row.created}</span>
                                                    </StyledTd>
                                                    <StyledTd>
                                                        <span>{row.validUntil}</span>
                                                    </StyledTd>
                                                    <StyledTd>
                                                        <Avatar
                                                            size="2rem"
                                                            src="./images/img_avatar.png"
                                                        />
                                                    </StyledTd>
                                                </tr>
                                            </tbody>
                                        </InCardTable>
                                    </Card>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </MainTable>
            </form>
        );
    }
}

Surveys.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Surveys;
