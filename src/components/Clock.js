import React from "react"

import $interval from "../service/MxTimeout"

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = $interval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
// eslint-disable-next-line no-undef
        $interval.cancel(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <span>{this.state.date.toLocaleTimeString()}</span>
        );
    }
}

export default Clock;