import React from 'react';

class Button extends React.Component {
    render() {
        const { text, onClickHandler, className } = this.props;
        return (
            <button
                onClick={onClickHandler}
                className={`btn ${className}`}
            >
                {text}
            </button>
        );
    }
}

export default Button;
