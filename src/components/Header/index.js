import styles from './styles.css';
import React from 'react';
import Button from '../Button';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <header className={`${styles['header']} ${styles['red-color']}`}>
            <h1>{this.props.title}</h1>
            <Button/>
           </header>
        );
    }
}

Header.defaultProps = {
    title:'Hello Wolrd'
};