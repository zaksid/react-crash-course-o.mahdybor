import React, { useContext } from 'react';
import { Theme } from '../context/Theme';

export default function LabeledInput(props) {
    const theme = useContext(Theme);
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
