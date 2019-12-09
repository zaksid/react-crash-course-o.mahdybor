import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/reducers/usersReducer';
import Button from './Button';

export default function ErrorView() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.error);
    const theme = useSelector(state => state.theme.resultsTheme);
    const getUsers = useCallback(() => dispatch(fetchUsers()), [dispatch]);

    return (
        <>
            {error && <div data-testid="error-view">
                <span className={`text ${theme}`}>
                    An error occurred: {error}
                </span>
                <Button
                    className="btn-warn"
                    text="Retry"
                    onClickHandler={getUsers}
                />
            </div>}
        </>
    );
}
