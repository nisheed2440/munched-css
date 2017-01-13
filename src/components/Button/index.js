import styles from './styles.css';
import React from 'react';
import classNames from 'classnames';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var classes = classNames({
            [styles['btn-control']] : true,
            [styles['btn-primary']] : true,
            [styles['btn-secondary']] : false
        });
        return (
           <button className={classes} type="button" title={this.props.text} >{this.props.text}</button>
        );
    }
}

Header.defaultProps = {
    text:'Button Text'
};