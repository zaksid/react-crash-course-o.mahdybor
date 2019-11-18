import React from 'react';
import { withTheme } from '../context/ThemePortal';

function CancelledView(props) {
    return (
        <div className={`text ${props.theme}`}>The request has been cancelled</div>
    );
}

export default withTheme(CancelledView);
