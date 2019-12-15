import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

export default function CancelledView() {
    const isCancelled = useSelector(state => state.users.isCancelled, shallowEqual());
    const theme = useSelector(state => state.theme.resultsTheme, shallowEqual());

    return (
        <>
            {isCancelled && <div className={`text ${theme}`}>The request has been cancelled</div>}
        </>
    );
}
