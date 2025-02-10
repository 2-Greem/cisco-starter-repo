import React, {Component} from 'react';

class BinarySelector extends Component {
    render () {
        return (
            <div classname="mt-2 by-2">
                <button onClick={this.props.function1}>{this.props.title1}</button>
                <button onClick={this.props.function2}>{this.props.title2}</button>
            </div>
        )
    }
}

export default BinarySelector;