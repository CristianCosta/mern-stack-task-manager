import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <nav className="responsive">
                <div className="container">
                    <div className="row">
                        <div className="col s11">
                            <a href="/" className="brand-logo">
                                {this.props.appTitle}
                            </a>
                        </div>
                        <div className="col s1">
                            <a href="/">
                                Tasks: {this.props.numberOfTask}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;