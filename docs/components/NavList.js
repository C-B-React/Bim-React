import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/navList';

export default class NavList extends Component {
    render() {
        const {menus} = this.props;
        return <div class="bim-nav-list">
            <ul>
                {
                    menus.map((menu) => {
                        return <li>
                            <NavLink activeClassName="active" to={menu.path}>
                                {
                                    menu.path.replace("\/", "")
                                }
                            </NavLink>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}