import React from 'react';
import Button from './Button';

class ErrorView extends React.Component {
    render() {
        const { errorMsg, onClickHandler } = this.props;
        return (
            <div>
                <span className="text">An error occurred: {errorMsg}</span>
                <Button
                    className="btn-warn"
                    text="Retry"
                    onClickHandler={onClickHandler} />
            </div>
        );
    }
}

export default ErrorView;
