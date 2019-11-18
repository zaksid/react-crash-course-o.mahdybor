import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import CancelledView from './components/CancelledView';
import ErrorView from './components/ErrorView';
import axios from 'axios';
import Loader from './components/Loader';
import ThemeSwitcher from './components/ThemeSwitcher';
import Toolbar from './components/Toolbar';
import { Theme } from './context/Theme';
import { ThemePortal } from './context/ThemePortal';
import ProfilePortal from './portals/ProfilePortal';

const Profile = React.lazy(() => import('./components/Profile'));

export default function App() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState({
        isError: false,
        message: ''
    });
    const [isCancelled, setCancelled] = useState(false);
    const [toolbarTheme, setToolbarTheme] = useState('dark');
    const [resultsTheme, setResultsTheme] = useState('light');

    const CancelToken = axios.CancelToken;
    const url = 'https://randomuser.me/api/';

    let source = CancelToken.source();

    async function sendRequest() {
        source = CancelToken.source();

        this.cancelBtnRef && this.cancelBtnRef.current && this.cancelBtnRef.current.focus();

        try {
            const response = await axios.get(url, {
                cancelToken: source.token
            });
            const user = response.data.results[0];

            setCancelled(false);
            setUser({
                email: user.email,
                name: user.name,
                image: user.picture.medium
            });
        } catch (error) {
            setUser(null);

            if (axios.isCancel(error)) {
                setCancelled(true);
            } else {
                setError({
                    isError: true,
                    message: error.message
                });
            }
        }
    }

    const cancelRequest = () => {
        source.cancel('Operation canceled by the user.');
    };

    useEffect(() => {
        return () => {
            cancelRequest();
        };
    });

    const toolbarThemeChange = (e) => {
        setToolbarTheme(e.currentTarget.value);
    };

    const resultsThemeChange = (e) => {
        setResultsTheme(e.currentTarget.value);
    };

    return (
        <div className={`App ${toolbarTheme}`}>
            <Theme.Provider value={toolbarTheme}>
                <ThemeSwitcher
                    onChangeHandler={toolbarThemeChange}
                    text={'Toolbar theme'}
                    themeFor={'toolbar'}
                    defaultTheme={toolbarTheme}
                />
                <Toolbar sendRequest={sendRequest} cancelRequest={cancelRequest} />
                <ThemeSwitcher
                    onChangeHandler={resultsThemeChange}
                    text={'Results theme'}
                    themeFor={'results'}
                    defaultTheme={resultsTheme}
                />

            </Theme.Provider>

            <ThemePortal.Provider value={resultsTheme}>
                <ProfilePortal>
                    <div className={`portal ${resultsTheme}`}>
                        <Suspense fallback={<Loader />}>
                            {user && <Profile user={user} />}
                            {error.isError && <ErrorView onClickHandler={sendRequest} errorMsg={error.message} />}
                            {isCancelled && <CancelledView />}
                        </Suspense>
                    </div>
                </ProfilePortal>
            </ThemePortal.Provider>
        </div>
    );
}
