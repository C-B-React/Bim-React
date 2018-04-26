import React, {Component} from 'react';

export default class TitleBar extends Component {
    render() {
        const {
            barStyle,
            title,
            titleStyle,
            className,
            style,
            ...others
        } = this.props;

        return <div className={"bim-titlebar " + (className || "")} style={style || {}} {...others}>
            <div className={"bim-titlebar-bar "} style={barStyle || {}}></div>
            <div className={"bim-titlebar-title"} style={titleStyle || {}}>{title}</div>
        </div>
    }
}
