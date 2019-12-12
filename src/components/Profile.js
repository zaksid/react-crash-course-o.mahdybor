import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import LabeledValue from './LabeledValue';

export default function Profile() {
    const user = useSelector(state => state.users.users[0], shallowEqual());
    const theme = useSelector(state => state.theme.resultsTheme, shallowEqual());

    return (
        <>
            {user &&
            <div className={`text ${theme}`}>
                <img src={user.picture} />
                <LabeledValue label="Name: " value={`${user.name.first} ${user.name.last}`} testId="user-name" />
                <LabeledValue label="Email: " value={user.email} testId="user-email" />
            </div>
            }
        </>
    );
}
