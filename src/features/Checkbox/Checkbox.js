import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CheckboxComponent from '../../components/Checkbox/Checkbox';

class Checkbox extends React.Component {
    constructor(props) {
        const { checked, link } = props;
        super(props);
        this.state = {
            checked,
        };
        if (link) {
            link.call(this);
        }
    }

    onChange(event) {
        const { onChange } = this.props;
        const { checked } = this.state;
        if (onChange) {
            onChange(event);
        }
        this.setState({
            checked: !checked,
        });
    }

    render() {
        const { className, name } = this.props;
        const { checked } = this.state;
        return (
            <CheckboxComponent
                className={className}
                name={name}
                onChange={(e) => {
                    this.onChange(e);
                }}
                checked={checked}
                width={1.5}
                height={1.5}
                strokeWidth={10}
                strokeDasharray={10}
                rx={50}
                ry={50}
            />
        );
    }
}

Checkbox.defaultProps = {
    link: null,
    onChange: null,
};

Checkbox.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    link: PropTypes.func,
};

export default styled(Checkbox)``;
