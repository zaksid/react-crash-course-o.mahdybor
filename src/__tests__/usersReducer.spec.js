import { fetchCancel, fetchError, fetchUsersStart, usersLoaded } from '../redux/actions/usersActions';
import { usersReducer } from '../redux/reducers/usersReducer';

describe('usersReducer', () => {
    const initState = {
        users: []
    };

    it('should return the same state by default', () => {
        const state = usersReducer(initState, { type: 'UNKNOWN' });
        expect(state).toBe(initState);
    });

    it('should correctly set loading status', () => {
        const state = usersReducer(initState, fetchUsersStart());
        expect(state.isLoading).toStrictEqual(true);
    });

    it('should correctly set cancel status', () => {
        const state = usersReducer(initState, fetchCancel());
        expect(state.isCancelled).toStrictEqual(true);
    });

    it('should correctly set error', () => {
        const state = usersReducer(initState, fetchError('Connection error'));
        expect(state.error).toBe('Connection error');
    });

    it('should reset loading/cancel/error status on successful load', () => {
        const state = usersReducer({
            error: true,
            isCancelled: true,
            isLoading: true
        }, usersLoaded([]));
        expect(state.error).toBeFalsy();
        expect(state.isCancelled).toBeFalsy();
        expect(state.isLoading).toBeFalsy();
    });
});
