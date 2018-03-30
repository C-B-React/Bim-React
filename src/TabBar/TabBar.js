import React, {Component} from 'react';

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: this.props.selectedIndex || -1
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
            unselectedColor,
            selectedColor,
            onClick,
            selectedIndex,
            ...others
        } = this.props;

        return <div className={"bim-tab-bar " + (className || "")} style={style || {}} {...others}>
            {
                items.map((item, index) => {
                    const isSelected = this.state.selectedIndex == index;
                    let tabClassName = "bim-tab-bar-tab " + (isSelected ? "selected" : "");
                    let iconStyle = isSelected ? {backgroundImage: `url(${item.selectedIcon})`} : {backgroundImage: `url(${item.icon})`};

                    return <div className={tabClassName} onClick={this.handleClick(index).bind(this)}>
                        <span className="bim-tab-bar-tab-icon" style={iconStyle}/>
                        <p className="bim-tab-bar-tab-title" style={this.getTitleColor(isSelected)}>{item.title}</p>
                    </div>
                })
            }
        </div>
    }
}