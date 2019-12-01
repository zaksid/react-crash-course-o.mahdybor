import React from 'react';
import { withTheme } from '../context/ThemePortal';
import Button from './Button';

function ErrorView(props) {
    const { errorMsg, onClickHandler, theme } = props;

    return (
        <div>
            <span className={`text ${theme}`}>
                An error occurred: {errorMsg}
            </span>
            <Button
                className="btn-warn"
                text="Retry"
                onClickHandler={onClickHandler}
            />
        </div>
    );
}

export default withTheme(ErrorView);
