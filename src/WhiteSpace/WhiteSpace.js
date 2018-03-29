import React, {Component} from 'react';

const WhiteSpaceConst = {
    size: {
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl"
    },
    class: {
        xs: "white-space-xs",
        sm: "white-space-sm",
        md: "white-space-md",
        lg: "white-space-lg",
        xl: "white-space-xl",
    }
};

export default class WhiteSpace extends Component {

    getSize(size) {
        switch (size) {
            case WhiteSpaceConst.size.xs:
                return WhiteSpaceConst.class.xs;
            case WhiteSpaceConst.size.sm:
                return WhiteSpaceConst.class.sm;
            case WhiteSpaceConst.size.md:
                return WhiteSpaceConst.class.md;
            case WhiteSpaceConst.size.lg:
                return WhiteSpaceConst.class.lg;
            case WhiteSpaceConst.size.xl:
                return WhiteSpaceConst.class.xl;
            default:
                return WhiteSpaceConst.class.md;
        }
    }


    render() {
        const {
            color,
            height,
            size,
            ...others
        } = this.props;

        const className = "white-space " + this.getSize(size);
        const style = Object.assign({}, {height});

        return <div className={className} {...style} {...others}/>
    }
}