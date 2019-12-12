import { setResultsTheme } from '../redux/actions/themeActions';
import { fetchCancel, fetchError, fetchUsersStart, usersLoaded } from '../redux/actions/usersActions';

describe('setResultsTheme', () => {
    const actionFetchUsersStart = fetchUsersStart();
    const actionUsersLoaded = usersLoaded([]);
    const actionFetchCancel = fetchCancel();
    const actionFetchError = fetchError('error');

    it('all should return correct action type', () => {
        expect(actionFetchCancel.type).toBe('FETCH_USERS_CANCEL');
        expect(actionFetchError.type).toBe('FETCH_USERS_ERROR');
        expect(actionFetchUsersStart.type).toBe('FETCH_USERS_START');
        expect(actionUsersLoaded.type).toBe('FETCH_USERS_SUCCESS');

    });

    it('all should match snapshot', () => {
        expect(actionFetchCancel).toMatchSnapshot();
        expect(actionFetchError).toMatchSnapshot();
        expect(actionFetchUsersStart).toMatchSnapshot();
        expect(actionUsersLoaded).toMatchSnapshot();
    });
});
