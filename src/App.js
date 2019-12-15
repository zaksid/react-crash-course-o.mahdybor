import React, { Suspense, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.css';
import CancelledView from './components/CancelledView';
import ErrorView from './components/ErrorView';
import Loader from './components/Loader';
import ThemeSwitcher from './components/ThemeSwitcher';
import Toolbar from './components/Toolbar';
import ProfilePortal from './portals/ProfilePortal';
import { setResultsTheme, setToolbarTheme } from './redux/actions/themeActions';
import { cancelRequest, fetchUsers } from './redux/reducers/usersReducer';

const Profile = React.lazy(() => import('./components/Profile'));

export default function App() {
    const dispatch = useDispatch();
    const getUsers = useCallback(() => dispatch(fetchUsers()), [dispatch]);
    const cancelReq = useCallback(() => dispatch(cancelRequest()), [dispatch]);
    const resultsThemeChange = useCallback((e) => dispatch(setResultsTheme(e.currentTarget.value)), [dispatch]);
    const toolbarThemeChange = useCallback((e) => dispatch(setToolbarTheme(e.currentTarget.value)), [dispatch]);
    const isLoading = useSelector(state => state.users.isLoading, shallowEqual());
    const toolbarTheme = useSelector(state => state.theme.toolbarTheme);
    const resultsTheme = useSelector(state => state.theme.resultsTheme);

    return (
        <div className={`App ${toolbarTheme}`}>
            <ThemeSwitcher
                onChangeHandler={toolbarThemeChange}
                text={'Toolbar theme'}
                themeFor={'toolbar'}
                defaultTheme={toolbarTheme}
            />
            <Toolbar sendRequest={getUsers} cancelRequest={cancelReq} />
            <ThemeSwitcher
                onChangeHandler={resultsThemeChange}
                text={'Results theme'}
                themeFor={'results'}
                defaultTheme={resultsTheme}
            />

            <ProfilePortal>
                <div className={`portal ${resultsTheme}`}>
                    <Suspense fallback={<Loader />}>
                        {isLoading
                            ? <Loader />
                            : <>
                                <Profile />
                                <ErrorView onClickHandler={getUsers} />
                                <CancelledView />
                            </>
                        }
                    </Suspense>
                </div>
            </ProfilePortal>
        </div>
    );
}
