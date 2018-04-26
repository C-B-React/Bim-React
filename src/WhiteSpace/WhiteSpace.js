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
        xs: "bim-whitespace-xs",
        sm: "bim-whitespace-sm",
        md: "bim-whitespace-md",
        lg: "bim-whitespace-lg",
        xl: "bim-whitespace-xl",
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

        const className = "bim-whitespace " + this.getSize(size);
        const style = {...(color ? {backgroundColor: color} : {}), ...(height ? {height: height} : {})};

        return <div className={className} style={style} {...others}/>
    }
}
