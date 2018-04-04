import React, {Component} from 'react';

let defaultZIndex = 1000;

export default class Panel extends Component {

    render() {
        const {
            visible,
            zIndex,
            className,
            style,
            ...others
        } = this.props;

        const styles = {
            zIndex: zIndex || this.zIndex || (this.zIndex = defaultZIndex++)
        };

        return <div className={"bim-panel"} style={styles}>
            {
                this.props.children
            }
        </div>
    }
}