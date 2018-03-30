import List from '../pages/ListPage';
import Home from './Home';
import TabBar from '../pages/TabBarPage';

const menus = [
    {
        path: "/home",
        component: Home
    }, {
        path: "/list",
        component: List
    },{
        path: "/tabBar",
        component: TabBar
    }
];

export {menus};