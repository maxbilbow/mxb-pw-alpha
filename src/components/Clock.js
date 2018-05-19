import React from "react"

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.state.date = new Date();
        this.setState(this.state);
    }

    render() {
        return (
            <span>{this.state.date.toLocaleTimeString()}</span>
        );
    }
}

export default Clock;