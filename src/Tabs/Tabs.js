import React, {Component} from 'react';

export default class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            tabs,
            initPage,
            onTabClick,
            className,
            style,
            ...others
        } = this.props;

        return <div className={"bim-tabs " + (className || "")}>
            <div className={"bim-tabs-content"}>
                {
                    tabs.map((tab) => {
                        return <div class="bim-tabs-content-tab">{tab.title}</div>
                    })
                }
                <div className={"bim-tabs-content-underline"}></div>
            </div>
            {
                //this.props.children
            }
        </div>

    }
}