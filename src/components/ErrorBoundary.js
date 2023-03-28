//import { Component } from "react";
import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        return this.state.hasError === true ?
        <h1>Oooops this is not good</h1>:
         this.props.children
    }

}

export default ErrorBoundary; 