import React from 'react';
import { useSelector } from 'react-redux';
import LabeledInput from './LabeledInput';

export default function ThemeSwitcher(props) {
    const { themeFor, text, defaultTheme } = props;
    const theme = useSelector(state => state.theme.toolbarTheme);

    return (
        <div>
            {text && <div className={`text ${theme}`}>{text}</div>}
            <LabeledInput
                type="radio"
                name={themeFor}
                value="dark"
                isChecked={defaultTheme === 'dark'}
                onChangeHandler={props.onChangeHandler}
                labelText="Dark"
            />
            <LabeledInput
                type="radio"
                name={themeFor}
                value="light"
                isChecked={defaultTheme === 'light'}
                onChangeHandler={props.onChangeHandler}
                labelText="Light"
            />
        </div>
    );
}
