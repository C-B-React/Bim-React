import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let defaultZIndex = 100;

export default class FixedPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: this.props.isShow
        }
    }

    static defaultProps = {
        isShow: true,
        targetNode: document.body
    };

    componentWillReceiveProps(newProps) {
        if (typeof newProps.isShow != "undefined") {
            this.setState({
                isShow: newProps.isShow
            })
        }
    }

    render() {
        const {
            targetNode,
            zIndex,
            className,
            style,
            ...others
        } = this.props;
        const {isShow} = this.state;

        return isShow ? ReactDOM.createPortal(
            <div className={"bim-fixedpanel " + (className || "")}
                 style={Object.assign({zIndex: zIndex || defaultZIndex++}, style)} {...others}>
                {this.props.children}
            </div>, targetNode
        ) : ""
    }
}
