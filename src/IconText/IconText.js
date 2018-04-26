import React, {Component} from 'react';

export default class IconText extends Component {
    handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        const {
            text,
            icon,
            onClick,
            className,
            style,
            ...others
        } = this.props;
        return <div className={"bim-icontext " + (className || "")} style={style || {}}
                    onClick={this.handleClick.bind(this)} {...others}>
            <svg className={"bim-icontext-icon"}>
                <use xlinkHref={`${icon}`}/>
            </svg>
            <p className={"bim-icontext-text"}>{text}</p>
        </div>
    }
}
