import React, {Component} from 'react';

export default class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ""
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    clear() {
        this.setState({
            value: ""
        })
    }

    render() {
        const {
            value,
            className,
            style,
            inputStyle,
            iconStyle,
            ...others
        } = this.props;

        return <div className={"bim-textinput " + (className || "")} style={style || {}}>
            <input type="text" style={inputStyle || {}} onChange={this.handleChange.bind(this)}
                   value={this.state.value}/>
            {
                this.state.value.trim() ? <svg onClick={this.clear.bind(this)}>
                    <use xlinkHref={"#close"}/>
                </svg> : ""
            }
        </div>
    }
}
