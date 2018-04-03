import React, {Component} from 'react';

export default class ImageItem extends Component {
    render() {
        const {
            title,
            url,
            className,
            style,
            imgStyle,
            ...others
        } = this.props;

        return <div className={"bim-imageItem"} style={style || {}}>
            < img src={url} className={"bim-imageItem-img"} style={imgStyle || {}}/>
            <p className={"bim-imageItem-title"}>{title}</p>
        </div>
    }
}