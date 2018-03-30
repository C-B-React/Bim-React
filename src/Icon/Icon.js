import React, {Component} from 'react';

const style = {
    width: 24
};

export default class Icon extends Component {

    render() {
        const {url} = this.props;
        return <img src={url} style={style}/>
    }
}