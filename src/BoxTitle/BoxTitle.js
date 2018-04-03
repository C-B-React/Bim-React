import React, {Component} from 'react';

export default class BoxTitle extends Component {
    render() {
        const {
            title,
            ...others
        } = this.props;

        return <div className={"bim-boxTitle"} {...others}>
            <div className={"bim-boxTitle-title"}>
                <div className={"bim-boxTitle-title-bar"}/>
                <div className={"bim-boxTitle-title-text"}>{title}</div>
            </div>
            {
                this.props.children
            }
        </div>
    }
}