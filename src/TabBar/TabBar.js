import React, {Component} from 'react';

export default class TabBar extends Component {
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
                self.setState({
                    selectedIndex: index
                });
                if (self.props.onClick) {
                    self.props.onClick(index)
                }
            }
        ))(index);
    }

    getTitleColor(isSelected) {
        const {unselectedColor, selectedColor} = this.props;
        let color = {};
        if (isSelected && selectedColor) {
            color = {'color': selectedColor}
        } else if (!isSelected && unselectedColor) {
            color = {'color': unselectedColor}
        }
        return color;
    }

    render() {
        const {
            items,
            className,
            style,
            tabBarTabStyle,
            tabColor,
            tabSelectedColor,
            onClick,
            selectedIndex,
            ...others
        } = this.props;

        return <div className={"bim-tabbar"} style={style || {}}>
            <div className={"bim-tabbar-content"}>
                {
                    this.props.children.map((child, index) => {
                        const isSelected = this.state.selectedIndex == index;

                        return <div className={isSelected ? "" : "hide"}>
                            {child}
                        </div>
                    })
                }
            </div>
            <div className={"bim-tabbar-tab " + (className || "")} style={tabBarTabStyle || {}}  {...others}>
                {
                    items.map((item, index) => {
                        const isSelected = this.state.selectedIndex == index;
                        const tabClassName = "bim-tab-bar-tab " + (isSelected ? "selected" : "");

                        return <div className={tabClassName} onClick={this.handleClick(index).bind(this)}
                                    href={item.url}>
                            <svg className="bim-tab-bar-tab-icon">
                                <use xlinkHref={`${item.icon}`}/>
                            </svg>
                            <p className="bim-tab-bar-tab-title" style={this.getTitleColor(isSelected)}>{item.title}</p>
                        </div>
                    })
                }
            </div>

        </div>
    }
}
