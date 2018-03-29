import React, {Component} from 'react';

const arrowConst = {
    arrowTypes: {
        up: "up",
        down: "down",
        horizontal: "horizontal"
    },
    arrowDirection: {
        up: "up.svg",
        down: "down.svg",
        horizontal: "forward.svg"
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
            content,
            extra,
            arrow,
            onClick,
            contentStyle,
            contentClassName,
            extraStyle,
            extraClassName,
            ...others
        } = this.props;

        const contentClass = "list-content " + (contentClassName ? contentClassName : "");
        const extraClass = "list-extra " + (extraClassName ? extraClassName : "");
        const arrowUrl = "./svg/" + getArrowType(arrow);


        return <div className='list' {...others}>
            <div className={contentClass} style={contentStyle}>{content}</div>
            <div className={extraClass} style={extraStyle}>{extra}</div>
            <div className="list-arrow" onClick={onClick}>
                <object data={arrowUrl} width="20" type="image/svg+xml"/>
            </div>
        </div>
    }

}