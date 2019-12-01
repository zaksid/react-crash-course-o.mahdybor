import Constants from '../constants';

export const fetchUsersStart = () => ({
    type: Constants.FetchUserStart
});

export const usersLoaded = users => ({
    type: Constants.FetchUserSuccess,
    payload: users
});

export const fetchCancel = () => ({
    type: Constants.FetchUserCancel
});

export const fetchError = error => ({
    type: Constants.FetchUserError,
    payload: error
});
