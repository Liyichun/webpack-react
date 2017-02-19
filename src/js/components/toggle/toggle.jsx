import React from 'react'
import ReactDOM from 'react-dom'

export default class Toggle extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}