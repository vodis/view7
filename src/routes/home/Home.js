import React from 'react';

class Home extends React.Component {
    state = {};

    componentDidMount() {
        setTimeout(() => {
            this.setState({ h1: "Index"})
        }, 5000);
    }

    render() {
        console.log(this.state);
        // if (this.state.h1 === undefined) return <div>Not yet</div> 
        return <h1>{this.state.h1}</h1>
    }
};

export default Home;