import React, {Component} from 'react';

export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: this.props.selectedIndex || 0
        }
    }

    componentWillReceiveProps(props) {
        if (typeof props.selectedIndex != 'undefined') {
            this.setState({
                selectedIndex: props.selectedIndex
            })
        }
    }

    handleClick(index) {
        let self = this;
        return ((index) => (
            () => {
                self.setState(
                    {
                        selectedIndex: index
                    }
                );
                if (self.props.onTabClick) {
                    self.props.onTabClick(index)
                }
            }
        ))(index)
    }

    render() {
        const {
            tabs,
            initPage,
            onTabClick,
            className,
            style,
            tabsStyle,
            tabsClassName,
            tabsItemActiveStyle,
            underlineClassName,
            underlineStyle,
            ...others
        } = this.props;

        const selectedIndex = this.state.selectedIndex;
        const underlineStyles = {
            ...{
                width: 100 / (tabs.length) + "%",
                left: selectedIndex * 100 / (tabs.length) + "%"
            }, ...(underlineStyle || {})
        };
        const underlineClass = "bim-tabs-content-underline bim-tabs-tabs-default-animated " + (underlineClassName || "");
        const children = this.props.children;
        const tabContentStyle = {
            transform: `translateX(-${selectedIndex}00%)`
        };

        return <div className={"bim-tabs " + (className || "")} style={style || {}} {...others}>
            <div className={"bim-tabs-tabs " + (tabsClassName || "")} style={tabsStyle || {}}>
                {
                    tabs.map((tab, index) => {
                        return <div class={"bim-tabs-tabs-item " + (selectedIndex == index ? "active" : "inactive")}
                                    style={(tabsItemActiveStyle && (selectedIndex == index)) ? tabsItemActiveStyle : {}}
                                    onClick={this.handleClick(index).bind(this)}>{tab.title}</div>
                    })
                }
                <div className={underlineClass} style={underlineStyles}></div>
            </div>
            <div class="bim-tabs-content" style={tabContentStyle}>
                {
                    React.Children.map(children, (child, index) => {
                        return <div
                            className={"bim-tabs-content-pane bim-tabs-tabs-default-animated " + (selectedIndex == index ? "active" : "inactive")}>
                            {child}
                        </div>
                    })
                }
            </div>
        </div>
    }
}