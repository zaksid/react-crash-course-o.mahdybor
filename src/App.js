import React, { Suspense } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import './App.css';
import CancelledView from './components/CancelledView';
import ErrorView from './components/ErrorView';
import Loader from './components/Loader';
import Toolbar from './components/Toolbar';
import ProfilePortal from './portals/ProfilePortal';

const Profile = React.lazy(() => import('./components/Profile'));

export default function App() {
    const isLoading = useSelector(state => state.users.isLoading, shallowEqual());
    const resultsTheme = useSelector(state => state.theme.resultsTheme);
    const toolbarTheme = useSelector(state => state.theme.toolbarTheme);

    return (
        <div className={`App ${toolbarTheme}`}>
            <Toolbar />

            <ProfilePortal>
                <div className={`portal ${resultsTheme}`}>
                    <Suspense fallback={<Loader />}>
                        {isLoading
                            ? <Loader />
                            : <>
                                <Profile />
                                <ErrorView />
                                <CancelledView />
                            </>
                        }
                    </Suspense>
                </div>
            </ProfilePortal>
        </div>
    );
}
