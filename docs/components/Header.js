import React, {Component} from 'react';
import '../css/header';

export default class Header extends Component {

    render() {
        const {logo} = this.props;
        return <header class="bim-header">
            <a className="bim-logo">{logo}</a>
        </header>
    }
}