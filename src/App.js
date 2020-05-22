import React, { Component } from 'react';

class App extends Component {
 

    constructor(props) {

        super(props);

        this.state = { count: 0 };

    }

    increment() {
        this.setState({ count: this.state.count += 1 })
    }

    decrement() {
        this.setState({ count: this.state.count -= 1 })
    }


    render() {


        return (

            <div>
                <h3>Simple {this.props.name}!</h3>
                <h5>{this.props.text}</h5>

                <div>count:{this.state.count}</div>
               
                <button onClick={this.decrement.bind(this)}>-</button>
                <button onClick={this.increment.bind(this)}>+</button>

            </div>

        );
    }
}

App.defaultProps = {
    name: "Counter",
    text: "Click the + to increment the count and - to decrement the count."
}


export default App;