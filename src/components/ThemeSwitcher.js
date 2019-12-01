import React, { useContext } from 'react';
import { Theme } from '../context/Theme';
import LabeledInput from './LabeledInput';

export default function ThemeSwitcher(props) {
    const { themeFor, text, defaultTheme } = props;
    const theme = useContext(Theme);

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
