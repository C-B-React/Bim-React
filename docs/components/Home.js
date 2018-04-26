import React, {Component} from 'react';
import '../css/home';

export default class Home extends Component {

    render() {
        const {match} = this.props;
        return <div className="bim-home">
            <h1 className="bim-home-title">BIM UI</h1>
            <h2 className="bim-home-subtitle">React组件库，for 长江航道局工程管理系统移动端</h2>
        </div>
    }
}
