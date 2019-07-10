import React, { Component } from 'react'

export class Navbar extends Component {
    static defaultProps = {
        title: "Github Finder",
        icon: "fa fa-github"
    };
    render() {
        return (
            <nav className="navbar bg-dark">
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
