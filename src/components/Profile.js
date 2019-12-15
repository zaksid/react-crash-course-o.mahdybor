import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

export default function Profile() {
    const user = useSelector(state => state.users.users[0], shallowEqual());
    const theme = useSelector(state => state.theme.resultsTheme, shallowEqual());

    return (
        <>
            {user &&
            <div className={`text ${theme}`}>
                <img src={user.picture} />
                <div>Name: {`${user.name.first} ${user.name.last}`}</div>
                <div>Email: {user.email}</div>
            </div>
            }
        </>
    );
}
