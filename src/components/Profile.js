import React from 'react';
import { withTheme } from '../context/ThemePortal';

function Profile(props) {
    const { user, theme } = props;

    return (
        <div className={`text ${theme}`}>
            <img src={user.image} />
            <div>Name: {`${user.name.first} ${user.name.first}`}</div>
            <div>Email: {user.email}</div>
        </div>
    );
}

export default withTheme(Profile);
