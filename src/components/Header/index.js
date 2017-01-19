import React from 'react';
import CSSModules from 'react-css-modules';
import Button from '../Button';
import styles from './styles.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <header styleName="header">
            <h1>{this.props.title}</h1>
            <Button type={0}/>
            <Button type={1}/>
            <Button type={2}/>
           </header>
        );
    }
}

Header.defaultProps = {
    title:'Hello World'
};

export default CSSModules(Header,styles);