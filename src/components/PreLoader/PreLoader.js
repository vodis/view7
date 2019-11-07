import React from 'react';

class LoadingView extends React.Component {
    state = {
        i: 1
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            console.log(this.state.i);
            this.setState({ i: this.state.i + 1 })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <h1>Loading</h1>
        );
    }
};

export default LoadingView;