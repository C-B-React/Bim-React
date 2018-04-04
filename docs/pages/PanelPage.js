import React, {Component} from 'react';
import Panel from 'bim-ui/Panel';

class Demo1 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isExist: typeof props.isExist != "undefined" ? props.isExist : true,
    //         isShowSecondDemo: false
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            isExist: true,
            isShowSecondDemo: false
        }
    }

    // componentWillReceiveProps(props) {
    //     if (typeof props.isExist != "undefined") {
    //         this.setState({
    //             isExist: props.isExist
    //         })
    //     }
    // }

    showDemo() {
        this.setState({
            isShowSecondDemo: true
        })
    }

    destory() {
        this.setState({
            isExist: false,
            // isShowSecondDemo: false
        })
    }

    render() {
        const {isExist, isShowSecondDemo} = this.state;

        // return <Panel isExist={isExist}>
        //     <button onClick={this.showDemo.bind(this)}>点我显示二级Demo</button>
        //     <button onClick={this.destory.bind(this)}>点我关闭当前页面</button>
        //     {
        //         isShowSecondDemo ? <Demo2 isExist={isExist}/> : ""
        //     }
        // </Panel>

        return isExist ? <Panel>
            <button onClick={this.showDemo.bind(this)}>点我显示二级Demo</button>
            <button onClick={this.destory.bind(this)}>点我关闭当前页面</button>
            {
                isShowSecondDemo ? <Demo2/> : ""
            }
        </Panel> : ""
    }
}

class Demo2 extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log("demo2。。。");
    //     this.state = {
    //         isExist: typeof props.isExist != "undefined" ? props.isExist : true
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            isExist: true
        }
    }

    destory() {
        this.setState({
            isExist: false
        })
    }

    // componentWillReceiveProps(props) {
    //     if (typeof props.isExist != "undefined") {
    //         this.setState({
    //             isExist: props.isExist
    //         })
    //     }
    // }

    render() {
        return this.state.isExist ? <Panel>
            <button onClick={this.destory.bind(this)}>"点我关闭"</button>
            "我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2我是demo2"
        </Panel> : ""
    }
}

export default class PanelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDemo: false
        }
    }

    handleClick() {
        this.setState({
            isShowDemo: true
        })
    }

    render() {
        return <div>
            <button onClick={this.handleClick.bind(this)}>点我显示一级demo</button>
            {
                this.state.isShowDemo ? <Demo1/> : ""
            }
        </div>
    }
}