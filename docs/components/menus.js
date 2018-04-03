import Home from './Home';
import List from '../pages/ListPage';
import TabBar from '../pages/TabBarPage';
import Tabs from '../pages/TabsPage';
import BoxTitle from '../pages/BoxTitlePage';

const menus = [
    {
        path: "/home",
        component: Home
    }, {
        path: "/list",
        component: List
    }, {
        path: "/tabBar",
        component: TabBar
    }, {
        path: "/tabs",
        component: Tabs
    }, {
        path: "/boxTitle",
        component: BoxTitle
    }
];

export {menus};