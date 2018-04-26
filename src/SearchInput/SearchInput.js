import React, {Component} from 'react';

export default class SearchInput extends Component {

    render() {
        const {
            className,
            style,
            onSearch,
            iconStyle,
            inputStyle,
            ...others
        } = this.props;
        return <div className={"bim-search " + (className || "")} style={style || {}} {...others}>
            <svg className={"bim-search-icon"} style={iconStyle || {}}>
                <use xlinkHref={"#search"}/>
            </svg>
            <input type={"text"} className={"bim-search-input"} style={inputStyle || {}}/>
        </div>
    }
}
