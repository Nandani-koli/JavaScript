//class component life cycle method and states
import React from "react";

class About extends React.Component{
    constructor()
    {
        super();
        this.state = {
            name : 'Nandani',
            age : 21,
        }
    }

    componentDidMount()
    {
        console.log('DID MOUNT');
    }

    componentDidUpdate()
    {
        alert('Changes updated');
    }

    render(){
        return (
        <div>
            <h1>ABOUT Component</h1>
            <p>{this.state.name}</p>
            <p>{this.state.age}</p>
            <button onClick={() => {this.setState({name : "Nandani Koli"})}}>Update name</button>
        </div>
        );
    };
};

export default About;


// constructor()
// {
// }

// componentDidMount(){

// }

// componentDidUpdate()
// {

// }

// componentWillUnmount()
// {

// }