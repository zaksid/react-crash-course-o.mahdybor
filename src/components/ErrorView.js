import React from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';

export default function ErrorView(props) {
    const { onClickHandler } = props;

    const error = useSelector(state => state.users.error);
    const theme = useSelector(state => state.theme.resultsTheme);

    return (
        <>
            {error && <div>
                <span className={`text ${theme}`}>
                    An error occurred: {error}
                </span>
                <Button
                    className="btn-warn"
                    text="Retry"
                    onClickHandler={onClickHandler}
                />
            </div>}
        </>
    );
}
