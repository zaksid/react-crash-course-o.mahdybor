import React from 'react';
import { useSelector } from 'react-redux';

export default function LabeledInput(props) {
    const theme = useSelector(state => state.theme.toolbarTheme);
    const { type, name, value, onChangeHandler, labelText, isChecked } = props;

    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                id={`${name}-${value}`}
                defaultChecked={isChecked}
                onChange={onChangeHandler}
            />
            <label
                htmlFor={`${name}-${value}`}
                className={`text ${theme}`}
            >
                {labelText}
            </label>
        </div>
    );
}
