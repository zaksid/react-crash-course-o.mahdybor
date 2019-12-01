import React, { useContext } from 'react';
import { Theme } from '../context/Theme';

export default function Button(props) {
    const { text, onClickHandler, className, rf } = props;
    const theme = useContext(Theme);

    return (
        <button
            ref={rf}
            onClick={onClickHandler}
            className={`btn ${className} ${theme}`}
        >
            {text}
        </button>
    );
}
