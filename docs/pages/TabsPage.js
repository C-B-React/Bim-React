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
    ],
    // tabsItemActiveStyle: {
    //     color: 'red'
    // }
};

const styles = {
    container: {
        width: 500,
        border: "1px solid #ccc"
    },
    panel: {
        lineHeight: "80px",
        textAlign: "center"
    }
};

export default class TabsPage extends Component {
    render() {
        return <div style={styles.container}>
            <Tabs {...data} >
                <div style={styles.panel}>123</div>
                <div style={styles.panel}> 456</div>
                <div style={styles.panel}> 789</div>
                <div style={styles.panel}> 000</div>
            </Tabs>
        </div>
    }
}