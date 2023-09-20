import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increase = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        );
    }
}

export default Counter;