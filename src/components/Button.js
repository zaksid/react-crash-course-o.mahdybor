import React from 'react';
import { useSelector } from 'react-redux';

const Button = React.forwardRef((props, ref) => {
    const { text, onClickHandler, className } = props;
    const theme = useSelector(state => state.theme.toolbarTheme);

    return (
        <button
            ref={ref}
            onClick={onClickHandler}
            className={`btn ${className} ${theme}`}
        >
            {text}
        </button>
    );
});

export default Button;
