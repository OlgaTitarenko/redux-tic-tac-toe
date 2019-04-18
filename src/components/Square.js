import React from 'react';

class Square extends React.Component {
    render() {
        const winClass = "square "+ this.props.winClass;
        return (
            <button
                className={winClass}
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square;