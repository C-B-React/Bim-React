import React, {Component} from 'react';

const arrowConst = {
    arrowTypes: {
        up: "up",
        down: "down",
        horizontal: "horizontal"
    },
    arrowDirection: {
        up: "resource/svg/up.svg",
        down: "resource/svg/down.svg",
        horizontal: "resource/svg/forward.svg"
    }
};


function getArrowType(type) {
    switch (type) {
        case arrowConst.arrowTypes.up:
            return arrowConst.arrowDirection.up;
        case arrowConst.arrowTypes.down:
            return arrowConst.arrowDirection.down;
        default:
            return arrowConst.arrowDirection.horizontal;
    }
}

export default class List extends Component {
    render() {
        const {
            items,
            className,
            style,
            ...others
        } = this.props;

        return <div className={"bim-list " + (className || "")} style={style || {}}>
            {
                items.map((item, index) => {
                    return <div className={"bim-list-item"}>
                        <div className={"bim-list-item-content "} style={item.contentStyle || {}}>{item.content}</div>
                        <div className={"bim-list-item-extra "} style={item.extraStyle || {}}>{item.extra}</div>
                        <div className={"bim-list-item-arrow"}
                             style={{backgroundImage: "url(" + getArrowType(item.arrow) + ")"}}
                             onClick={item.onClick}></div>
                    </div>
                })
            }
        </div>
    }
}