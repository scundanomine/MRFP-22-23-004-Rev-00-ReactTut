import React from "react";
import { Component } from "react";

export class Welcome extends Component {
    constructor(props){
        this.props=props
    }
    render(props) {
        console.log(props);
        return (
            <h1>My Name is {this.props.name} a.k.a {this.props.heroName}</h1>
        )
    }
}