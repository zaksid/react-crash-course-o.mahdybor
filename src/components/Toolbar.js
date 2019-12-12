import React, { useCallback, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setResultsTheme, setToolbarTheme } from '../redux/actions/themeActions';
import { cancelRequest, fetchUsers } from '../redux/reducers/usersReducer';
import Button from './Button';
import ThemeSwitcher from './ThemeSwitcher';

export default function Toolbar() {
    const dispatch = useDispatch();
    const cancelBtnRef = useRef(null);
    const isLoading = useSelector(state => state.users.isLoading, shallowEqual());
    const getUsers = useCallback(() => dispatch(fetchUsers()), [dispatch]);
    const cancelReq = useCallback(() => dispatch(cancelRequest()), [dispatch]);
    const resultsThemeChange = useCallback((e) => dispatch(setResultsTheme(e.currentTarget.value)), [dispatch]);
    const toolbarThemeChange = useCallback((e) => dispatch(setToolbarTheme(e.currentTarget.value)), [dispatch]);
    const toolbarTheme = useSelector(state => state.theme.toolbarTheme);
    const resultsTheme = useSelector(state => state.theme.resultsTheme);

    useEffect(() => {
        isLoading && cancelBtnRef.current.focus();
    }, [isLoading]);

    return (
        <div>
            <ThemeSwitcher
                onChangeHandler={toolbarThemeChange}
                text={'Toolbar theme'}
                themeFor={'toolbar'}
                defaultTheme={toolbarTheme} />

            <Button
                className="btn-ok"
                text="Send request"
                onClickHandler={getUsers} />

            <Button
                className="btn-cancel"
                text="Cancel request"
                ref={cancelBtnRef}
                onClickHandler={cancelReq} />

            <ThemeSwitcher
                onChangeHandler={resultsThemeChange}
                text={'Results theme'}
                themeFor={'results'}
                defaultTheme={resultsTheme} />
        </div>
    );
}
