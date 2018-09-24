import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    FaEllipsisV, FaPlay, FaEye, FaEdit, FaChartBar, FaTrash,
} from 'react-icons/fa';
import CardActiveElement from './CardActiveElement';
import CardComponent from '../../components/Card/Card';

class Card extends React.Component {
    constructor(props) {
        const { active, link } = props;
        super(props);
        this.state = {
            active,
        };
        if (link) {
            link.call(this);
        }
    }

    onToggleActive(event) {
        const { onChange } = this.props;
        const { active } = this.state;
        event.preventDefault();
        this.setState({
            active: !active,
        });
        if (onChange) {
            onChange(this);
        }
    }

    render() {
        const iconSize = 20;
        const {
            width, height, className, children,
        } = this.props;
        const { active } = this.state;
        return (
            <CardComponent
                onToggleActive={(e) => {
                    this.onToggleActive(e);
                }}
                icon={<FaEllipsisV size={20} />}
                width={width}
                height={height}
                active={active}
                className={className}
                activeChildren={[
                    <CardActiveElement key={1} icon={<FaPlay size={iconSize} />} text="activate" />,
                    <CardActiveElement key={2} icon={<FaEye size={iconSize} />} text="preview" />,
                    <CardActiveElement key={3} icon={<FaEdit size={iconSize} />} text="edit" />,
                    <CardActiveElement
                        key={4}
                        icon={<FaChartBar size={iconSize} />}
                        text="stats"
                    />,
                    <CardActiveElement key={5} icon={<FaTrash size={iconSize} />} text="delete" />,
                ]}
            >
                {children}
            </CardComponent>
        );
    }
}

Card.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    link: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default styled(Card)`
    width: 100%;
`;
