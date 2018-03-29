import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header';
import {menus} from './menus';
import NavList from './NavList';
import Home from './Home';
import '../css/common';

const logo = "BIM UI";

const App = () => (<div>
    <Header logo={logo}/>
    <NavList menus={menus}/>
    <div className="main">
        <Switch>
            <Route path="/" exact component={Home}/>
            {
                menus.map((menu) => {
                    return <Route path={menu.path} component={menu.component}/>
                })
            }
            <Redirect to="/"/>
        </Switch>
    </div>
</div>);

export default App;
