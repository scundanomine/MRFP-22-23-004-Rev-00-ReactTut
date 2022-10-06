import React from "react";
import { Component } from "react";

export class Welcome extends Component {

    render() {
        console.log(this.props);
        return (
            <>
            <h1>My Name is {this.props.name} a.k.a {this.props.heroName}</h1>
            {this.props.children}
            </>
        )
       }
}