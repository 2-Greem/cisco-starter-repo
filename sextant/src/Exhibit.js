import React, { Component } from 'react';

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit border b-2 my-2">
                <h2 className="ExhibitHeading">{this.props.heading}</h2>
                <div className="ExhibitContent">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Exhibit;