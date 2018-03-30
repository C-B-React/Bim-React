import React, {Component} from 'react';
import Tabs from 'bim-ui/Tabs';

const data = {
    tabs: [
        {
            title: "项目信息"
        }, {
            title: "质量管理"
        }, {
            title: "问题管理"
        }, {
            title: "监理模块"
        }
    ]
};

export default class TabsPage extends Component {
    render() {
        return <div>
            <Tabs {...data} />
        </div>
    }
}