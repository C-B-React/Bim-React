import React, {Component} from 'react';
import TabBar from 'bim-ui/TabBar';

const Home = () => (<h1>我是home</h1>);
const Message = () => (<h1>我是message</h1>);
const Mine = () => (<h1>我是个人中心</h1>);

const styles = {
    container: {
        width: 300,
        height: 600,
        border: "1px solid #ccc",
        position: "relative"
    },
    content: {
        marginBottom: 40
    },
    nav: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    }
};

const data = {
    items: [
        {
            title: "首页",
            icon: "resource/svg/home.svg",
            selectedIcon: "resource/svg/home-active.svg"
        }, {
            title: "信息",
            icon: "resource/svg/message.svg",
            selectedIcon: "resource/svg/message-active.svg"
        }, {
            title: "我",
            icon: "resource/svg/mine.svg",
            selectedIcon: "resource/svg/mine-active.svg"
        }
    ],
    id: '123',
    className: "test"
};

const content = [Home, Message, Mine];

export default class TabBarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2
        }
    }

    onClick(index) {
        this.setState({
            selectedIndex: index
        })
    }

    render() {
        const selectedIndex = this.state.selectedIndex;
        return <div style={styles.container}>
            <div style={styles.content}>
                {
                    content[selectedIndex]()
                }
            </div>
            <div style={styles.nav}>
                <TabBar {...data} onClick={this.onClick.bind(this)} selectedIndex={selectedIndex}/>
            </div>
        </div>
    }
}