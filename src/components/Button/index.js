import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles.css';

/*
    Types
    0 - default
    1 - primary
    2 - secondary
 */

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var classes = classNames({
            'default': this.props.type === 0,
            'primary': this.props.type === 1,
            'secondary': this.props.type === 2
        });
        return (
           <button className="glob" styleName={classes} type="button" title={this.props.text}>{this.props.text}</button>
        );
    }
}

Button.defaultProps = {
    text:'Button Text',
    type:0
};

export default CSSModules(Button,styles);